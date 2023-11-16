module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // Puedes personalizar las reglas de ESLint aquí
    },
  overrides: [
    {
      files: ['router/index.js'], // Archivos JS en el directorio router
      excludedFiles: ['router/index.js'], // Excluir el archivo de configuración de Babel
    },
  ],
};
