module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': 0,
    'no-console': 0,
    '@typescript-eslint/no-unused-vars': [2, {
      ignoreRestSiblings: true,
      argsIgnorePattern: '^_',
    }],
  },
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    node: true,
    es6: true,
  },
};
