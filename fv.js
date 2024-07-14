// const error = 'error'

// module.exports = {
//   env: {
//     jest: true
//   },
//   extends: [
//     'prettier',
//     'plugin:jest/recommended',
//     'plugin:@typescript-eslint/recommended',
//     '@react-native-community'
//   ],
//   ignorePatterns: [
//     'commitlint.config.js',
//     'generated.ts',
//     '.eslintrc.js',
//     'jest.config.js',
//     'jest/',
//     'src/lang/syncLocales.js',
//     'src/lang/forceUploadLocales.js'
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     createDefaultProgram: true,
//     // Allows for the use of imports
//     ecmaFeatures: {
//       jsx: true // Allows for the parsing of JSX
//     },
//     ecmaVersion: 12,
//     project: 'tsconfig.json',
//     // Allows for the parsing of modern ECMAScript features
//     sourceType: 'module',
//     tsconfigRootDir: '.'
//   },
//   plugins: [
//     '@typescript-eslint',
//     'import',
//     'react',
//     'react-hooks',
//     'react-native',
//     'unused-imports',
//     'typescript-sort-keys',
//     'sort-keys-fix'
//   ],
//   root: true,
//   rules: {
//     'comma-dangle': error,
//     '@typescript-eslint/no-empty-interface': error,
//     '@typescript-eslint/no-explicit-any': error,
//     '@typescript-eslint/no-floating-promises': 0,
//     '@typescript-eslint/no-non-null-assertion': error,
//     '@typescript-eslint/no-unsafe-assignment': 0,
//     '@typescript-eslint/no-use-before-define': [2, { variables: false }],
//     '@typescript-eslint/ban-ts-comment': 0,
//     'ban-ts-comment': 0,
//     'ban-ts-ignore': 0,
//     camelcase: 0,
//     'class-methods-use-this': 0,
//     complexity: [error, { max: 6 }],
//     curly: [error, 'all'],
//     eqeqeq: [error, 'always', { 'null': 'ignore' }],
//     'implicit-arrow-linebreak': 0,

//     'import/extensions': [
//       error,
//       'ignorePackages',
//       {
//         jpg: 'never',
//         js: 'never',
//         jsx: 'never',
//         ts: 'never',
//         tsx: 'never'
//       }
//     ],
//     'import/order': [
//       error,
//       {
//         alphabetize: {
//           /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */
//           caseInsensitive: true,
//           order: 'asc' /* ignore case. Options: [true, false] */
//         },
//         groups: [
//           'builtin',
//           'external',
//           'parent',
//           'sibling',
//           'index',
//           'internal',
//           'object',
//           'type'
//         ],
//         'newlines-between': 'always',
//         pathGroups: [
//           {
//             pattern: 'react+(|-native)',
//             group: 'external',
//             position: 'before'
//           },
//           {
//             pattern: '(@)react+(|-)',
//             group: 'external',
//             position: 'before'
//           },
//           {
//             pattern: 'src/',
//             group: 'internal',
//             position: 'after'
//           }
//         ],
//         pathGroupsExcludedImportTypes: ['builtin', 'react']
//       }
//     ],
//     'import/prefer-default-export': 0,
//     'lines-between-class-members': 0,
//     'max-classes-per-file': 0,
//     'max-nested-callbacks': [error, 4],
//     'member-access': 0,
//     'no-duplicate-imports': error,
//     'no-else-return': 0,
//     'no-irregular-whitespace': 2,
//     'no-nested-ternary': 0,
//     'no-param-reassign': 1,
//     'no-plusplus': 0,
//     // note you must disable the base rule as it can report incorrect errors
//     'no-shadow': 'off',
//     'no-underscore-dangle': 0,
//     'no-unreachable': 1,
//     'no-use-before-define': 0,
//     'object-property-newline': [2, { allowAllPropertiesOnSameLine: false }],
//     'only-arrow-functions': 0,
//     'padding-line-between-statements': [
//       'error',
//       {
//         blankLine: 'always',
//         next: 'return',
//         prev: '*'
//       },
//       {
//         blankLine: 'always',
//         next: 'block-like',
//         prev: 'block-like'
//       }
//     ],
//     'quote-props': [error, 'as-needed', { keywords: true }],
//     quotes: [error, 'single', { avoidEscape: true }],
//     'react-native/sort-styles': 0,
//     'react/jsx-no-literals': error,
//     'react/jsx-uses-react': 1,
//     'react/jsx-uses-vars': 1,
//     'react/jsx-key': 1,
//     semi: [error, 'never'],
//     'space-before-function-paren': [
//       error,
//       {
//         anonymous: 'always',
//         asyncArrow: 'always',
//         named: 'never'
//       }
//     ],
//     'typescript-sort-keys/interface': 'error',
//     'typescript-sort-keys/string-enum': 'error',
//     'unused-imports/no-unused-imports': 'error',
//     '@typescript-eslint/no-unused-vars': 'off',
//     'unused-imports/no-unused-vars': [
//       'error',
//       {
//         // https://github.com/typescript-eslint/typescript-eslint/issues/763
//         ignoreRestSiblings: true,
//         argsIgnorePattern: '^_'
//       }
//     ],
//     '@typescript-eslint/no-shadow': error,
//     'react-hooks/rules-of-hooks': 'error',
//     'react-hooks/exhaustive-deps': 'warn',
//     'react-native/no-unused-styles': 2,
//     'react-native/no-inline-styles': 2,
//     'react-native/no-single-element-style-arrays': 2,
//     'import/newline-after-import': ['error', { count: 1 }],
//     'import/no-extraneous-dependencies': ['error', { 'devDependencies': true, 'optionalDependencies': true, 'peerDependencies': true }]
//   },
//   overrides: [
//     {
//       'files': [
//         'src/*.ts',
//         'src//*.ts',
//         'src///*.ts'
//       ],
//       'rules': {
//         'sort-keys-fix/sort-keys-fix': 'warn'
//       }
//     }
//   ],
//   settings: {
//     'import/resolver': {
//       node: {
//         extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.jpg']
//       }
//     },
//     react: {
//       version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
//     }
//   }
// }