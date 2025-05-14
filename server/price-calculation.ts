import { DateTime } from 'luxon'
import { Decimal } from 'decimal.js'

type RowCalculationModel = {
  date: Date
  value: Decimal
}

type Percent = {
  unit: string
  value: number
}

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PricesCalculation {
  private static PERCENTAGE = '%'
  private static DATE_FORMAT = 'yyyy-MM-dd'

  static percent(mostRecentRecord: Decimal, beforeRecord: Decimal | null): Percent | null {
    if (!beforeRecord) {
      return null
    }

    const DECIMAL_PLACES = 2
    const ONE_HUNDRED = 100

    Decimal.set({ precision: ONE_HUNDRED })
    const mostRecentPriceNumber = mostRecentRecord.toNumber()
    const beforePriceNumber = beforeRecord.toNumber()

    let change = ONE_HUNDRED

    if (beforeRecord.toDecimalPlaces(0).toNumber() !== 0) {
      change = new Decimal(mostRecentPriceNumber)
        .minus(beforePriceNumber)
        .div(beforePriceNumber)
        .mul(ONE_HUNDRED)
        .toDecimalPlaces(DECIMAL_PLACES)
        .toNumber()
    }

    return {
      unit: this.PERCENTAGE,
      value: change
    }
  }

  static orderArrayByDate(array: RowCalculationModel[]): RowCalculationModel[] {
    return [...array].sort(
      (a, b) => DateTime.fromJSDate(b.date).toMillis() - DateTime.fromJSDate(a.date).toMillis()
    )
  }

  static findClosestDate(
    pricesList: RowCalculationModel[],
    targetDate: DateTime
  ): RowCalculationModel | null {
    let closestPrice: RowCalculationModel | null = null
    let closestDiff = Infinity

    for (const priceData of pricesList) {
      const currentDiff = Math.abs(
        DateTime.fromJSDate(priceData.date).toMillis() - targetDate.toMillis()
      )
      if (currentDiff < closestDiff) {
        closestDiff = currentDiff
        closestPrice = priceData
      }
    }

    return closestPrice
  }

  static calculateYoY(params: {
    group: RowCalculationModel[]
    mostRecentRecord?: RowCalculationModel
  }): Percent | null {
    const { group: recordsUnorder, mostRecentRecord } = params

    if (recordsUnorder.length === 0) {
      return null
    }

    const group = this.orderArrayByDate(recordsUnorder)

    const mostRecent = mostRecentRecord ?? group[0]

    const mostRecentDate = DateTime.fromJSDate(mostRecent.date)
    const previousYearToCurrent = mostRecentDate.minus({ year: 1 })

    const groupFromSameMonthLastYear = group.filter(row => {
      return DateTime.fromJSDate(row.date)
        .toFormat(this.DATE_FORMAT)
        .startsWith(previousYearToCurrent.toFormat('yyyy-MM'))
    })

    if (groupFromSameMonthLastYear.length === 0) {
      return null
    }

    const sameDate = groupFromSameMonthLastYear.find(
      row => DateTime.fromJSDate(row.date).day === mostRecentDate.day
    )

    if (sameDate) {
      return this.percent(mostRecent.value, sameDate.value)
    }

    const closestDate = this.findClosestDate(groupFromSameMonthLastYear, previousYearToCurrent)
    return this.percent(mostRecent.value, closestDate.value)
  }
}
