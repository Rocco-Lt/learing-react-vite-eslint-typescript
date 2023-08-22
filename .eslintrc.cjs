module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react-refresh', 'prettier', 'react-hooks',],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-undef': 'off',
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    'react/jsx-no-target-blank': 'off',
    // 禁止使用 any 类型
    "@typescript-eslint/no-explicit-any": ["off"],
    // 禁止定义未使用的变量
    "@typescript-eslint/no-unused-vars": "error",
  },
}
