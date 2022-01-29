module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
