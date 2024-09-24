import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

// Configuración de ESLint en formato plano
const config = [
  // Reglas recomendadas de ESLint
  js.configs.recommended,
  // Reglas recomendadas de TypeScript
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: typescriptParser, // Usar el parser de TypeScript
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescriptEslint,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': ['warn'], // Ejemplo de regla
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Ajusta según tus necesidades
    },
  },
  // Configuración de Prettier
  {
    plugins: { prettier },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];

export default config;
