module.exports = {
  root: true,
  extends: [
    '@monorepo-test/eslint-config',
    'next/core-web-vitals'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};
