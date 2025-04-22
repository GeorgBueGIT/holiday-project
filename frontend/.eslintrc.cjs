module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import'],
    extends: [
      'airbnb',
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/prefer-default-export': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  