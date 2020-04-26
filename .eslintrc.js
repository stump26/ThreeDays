module.exports = {
  root: true,
  settings: {
    'import/resolver': 'babel-plugin-root-import',
  },
  extends: '@dooboo/eslint-config',
  rules: {
    '@typescript-eslint/indent': 'off',
  },
};
