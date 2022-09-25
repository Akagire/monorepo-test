module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@monorepo-test/eslint-config'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};
