module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    // Строки
    'quotes': ['error', 'single'], // Используйте одинарные кавычки
    'semi': ['error', 'never'], // Всегда ставьте точку с запятой в конце выражения

    // Отступы и форматирование
    'indent': ['error', 2], // Используйте два пробела для отступа
    'linebreak-style': 0, // Используйте стиль конца строки UNIX
    'comma-dangle': ['error', 'never'], // Не допускайте лишних запятых в конце массивов и объектов
    'no-trailing-spaces': 'error', // Запрет на пробелы в конце строк

    // Переменные
    'no-var': 'error', // Используйте let или const, избегайте var
    'prefer-const': 'error', // Предпочитайте использование const, если переменная не переназначается
    'no-unused-vars': 'error', // Запрет на неиспользуемые переменные

    // Сравнения и равенства
    'eqeqeq': 'error', // Используйте строгое сравнение (=== и !==)

    // Работа с функциями
    'func-style': ['error', 'expression'], // Используйте функциональные выражения вместо объявлений
    'arrow-spacing': ['error', { 'before': true, 'after': true }], // Пробелы вокруг стрелочных функций
    'no-confusing-arrow': ['error', { 'allowParens': true }], // Избегайте недоразумений с использованием стрелочных функций

    // Работа с массивами и объектами
    'no-array-constructor': 'error', // Избегайте использования конструктора массивов
    'no-new-object': 'error', // Избегайте использования конструктора объектов

    // React
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 0,
    'react/display-name': 0
  }
}
