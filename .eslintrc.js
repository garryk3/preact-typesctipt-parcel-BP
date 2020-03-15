module.exports =  {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'filenames'
    ],
    env: {
        browser: true,
        node: true,
        jest: true
    },
    globals: {
        __CLIENT__: 'readonly',
        __SERVER__: 'readonly',
        __DEVELOPMENT__: 'readonly',
        __VERSION__: 'readonly'
    },
    extends: [
        'airbnb',
        // 'rules/eslint-airbnb-fix',
        // 'rules/eslint-base',
        // 'rules/eslint-react'
    ],
    rules : {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            'vars': 'all',
            'args': 'after-used',
            'ignoreRestSiblings': false,
            'varsIgnorePattern': 'h'
        }],
        'import/extensions': 'off',
        'filenames/match-regex': [2, "^[a-z\-]+$", true],
        'no-mixed-operators': 'off',
        'react/jsx-uses-react': [1],
        'react/jsx-indent': 4,
        'react/jsx-props-no-spreading': 'off',
        'react/static-property-placement': 'off',
        'react/state-in-constructor': 'off',
        'react/jsx-fragments': 'off',
        "react/react-in-jsx-scope": "off",
        'padding-line-between-statements': [
            "warn",
            { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
            { "blankLine": "any",    "prev": ["const", "let", "var"], "next": ["const", "let", "var"] }
        ],
        'react/sort-comp': [1, {
            order: [
                'static-variables',
                'static-methods',
                'instance-variables',
                'lifecycle',
                'everything-else',
                'render'
            ]
        }],
        'react/jsx-filename-extension': [
            "error",
            {
              "extensions": [
                ".ts",
                ".tsx"
              ]
            }
          ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'react/prop-types': 'off',
                'no-multi-spaces': 'off'
            }
        }
    ],
    settings: {
        'import/resolver': {
          alias: {
            map: [
              ['components', './src/components'],
              ['routes', './src/routes'],
              ['utils', './src/utils'],
            ],
            extensions: ['.ts', '.tsx']
          }
        }
      }
};
