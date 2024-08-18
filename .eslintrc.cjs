module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        tsConfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint','react-refresh', 'jsx-a11y'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        '@typescript-eslint/no-unsafe-assignment': 'warn'
    },
}
