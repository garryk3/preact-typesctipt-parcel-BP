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
    extends: [
        'airbnb'
    ],
    rules : {
        indent             : ['warn', 4, {
            SwitchCase: 1
        }],
        'comma-dangle': ['warn', 'never'],
        'key-spacing' : ['warn', {
            singleLine: {
                beforeColon: false,
                afterColon : true
            },
            multiLine: {
                afterColon: true,
                align     : 'colon'
            }
        }],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            'vars': 'all',
            'args': 'after-used',
            'ignoreRestSiblings': false,
            'varsIgnorePattern': 'h'
        }],
        'no-console': 0,
        'keyword-spacing': ['warn', {
            overrides: {
                if: {
                    after: false
                },
                for: {
                    after: false
                },
                while: {
                    after: false
                },
                catch: {
                    after: false
                },
                switch: {
                    after: false
                },
                return: {
                    after: true
                }
            }
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
                'no-multi-spaces': 'off',
                'linebreak-style': 'off'
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
              ['configs', './src/configs'],
            ],
            extensions: ['.ts', '.tsx']
          }
        }
      }
};
