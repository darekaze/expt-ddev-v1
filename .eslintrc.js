module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['airbnb-typescript', 'airbnb/hooks', 'prettier/@typescript-eslint'],
  rules: {
    'prettier/prettier': 'warn',
    'arrow-body-style': 'off',
    'no-unused-expressions': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/prop-types': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    'react/jsx-closing-bracket-location': [
      'error',
      { selfClosing: 'tag-aligned', nonEmpty: 'after-props' },
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
  },
}
