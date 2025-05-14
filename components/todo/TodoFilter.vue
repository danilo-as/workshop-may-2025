<script lang="ts" setup>
type FilterType = 'all' | 'active' | 'completed'

defineProps<{
  activeFilter: FilterType
  completedCount: number
  totalCount: number
}>()

const emit = defineEmits<{
  (e: 'filter-change', filter: FilterType): void
  (e: 'clear-completed'): void
}>()

function setFilter(filter: FilterType) {
  emit('filter-change', filter)
}

function clearCompleted() {
  emit('clear-completed')
}
</script>

<template>
  <div
    class="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-50 border-t border-gray-200"
  >
    <div class="mb-2 sm:mb-0 text-sm text-gray-500">
      {{ totalCount }} items total, {{ completedCount }} completed
    </div>

    <div class="flex space-x-2">
      <button
        :class="[
          'px-3 py-1 text-sm rounded',
          activeFilter === 'all'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        ]"
        data-test="filter-all"
        @click="setFilter('all')"
      >
        All
      </button>

      <button
        :class="[
          'px-3 py-1 text-sm rounded',
          activeFilter === 'active'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        ]"
        data-test="filter-active"
        @click="setFilter('active')"
      >
        Active
      </button>

      <button
        :class="[
          'px-3 py-1 text-sm rounded',
          activeFilter === 'completed'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        ]"
        data-test="filter-completed"
        @click="setFilter('completed')"
      >
        Completed
      </button>
    </div>

    <button
      v-if="completedCount > 0"
      class="mt-2 sm:mt-0 px-3 py-1 text-sm text-red-500 hover:text-red-700"
      data-test="clear-completed"
      @click="clearCompleted"
    >
      Clear completed
    </button>
  </div>
</template>
