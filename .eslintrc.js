module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "jsx-a11y", // Plugin para acessibilidade
    "jest",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime", // Permite o uso do JSX sem importar React (caso esteja usando o novo JSX transform)
    "plugin:jest/recommended",
  ],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { varsIgnorePattern: "^React$" },
    ],
    "@typescript-eslint/no-explicit-any": "warn", // Aviso para uso de "any" no TypeScript
    "jsx-a11y/anchor-is-valid": "warn", // Aviso para links sem conteúdo acessível
    "jsx-a11y/alt-text": "warn", // Aviso para imagens sem texto alternativo
    "react/prop-types": "off", // Desativa a verificação de PropTypes
  },
  settings: {
    react: {
      version: "detect", // Detecta automaticamente a versão do React
    },
  },
  env: {
    browser: true, // Para ambiente de navegador
    node: true, // Para ambiente de Node.js
  },
  ignorePatterns: ["public/"],
};
