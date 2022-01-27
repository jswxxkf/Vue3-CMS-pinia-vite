module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/stylelint')],
  overrides: [
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ]
}
