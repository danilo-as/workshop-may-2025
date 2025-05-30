// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier/prettier'

export default withNuxt(eslintConfigPrettier, eslintPluginPrettierRecommended)
