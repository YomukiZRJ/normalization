/**
 * javaSrcipt代码风格指南
 * @see http://eslint.cn/docs/rules
 */
module.exports = {
    parserOptions: {
        ecmaVersion: 2022,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: "module",
    },

    env: {
        es2021: true,
        node: true,
    },

    plugins: ['import',
        'n',
        'promise',],

    globals: {
        document: "readonly",
        navigator: "readonly",
        window: "readonly",
    },

    rules: {
        indent: [
            "error",
            2,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                MemberExpression: 1,
                FunctionDeclaration: { parameters: 1, body: 1 },
                FunctionExpression: { parameters: 1, body: 1 },
                CallExpression: { arguments: 1 },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoreComments: false,
                ignoredNodes: [
                    "TemplateLiteral *",
                    "JSXElement",
                    "JSXElement > *",
                    "JSXAttribute",
                    "JSXIdentifier",
                    "JSXNamespacedName",
                    "JSXMemberExpression",
                    "JSXSpreadAttribute",
                    "JSXExpressionContainer",
                    "JSXOpeningElement",
                    "JSXClosingElement",
                    "JSXFragment",
                    "JSXOpeningFragment",
                    "JSXClosingFragment",
                    "JSXText",
                    "JSXEmptyExpression",
                    "JSXSpreadChild",
                ],
                offsetTernaryExpressions: true,
            },
        ],
        quotes: [
            "error",
            "single",
            { avoidEscape: true, allowTemplateLiterals: false },
        ],
        semi: ['error', 'never'],
        //  数组开括号后和闭括号前使用一致的换行符
        'array-bracket-newline': ['error', 'consistent'],
        // 禁止在数组内出现空格
        "array-bracket-spacing": ["error", "never"],
        // 需要一致地使用数组元素之间的换行符
        "array-element-newline": ["error", "consistent"],
        // 强制在代码块中开括号前和闭括号后有空格
        "block-spacing": ["error", "always"],
        // 将大括号放在控制语句或声明语句同一行的位置
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        // 拖尾逗号
        "comma-dangle": [
            "error",
            {
                arrays: "never",
                objects: "never",
                imports: "never",
                exports: "never",
                functions: "never",
            },
        ],
        // 禁止在逗号前使用空格,要求在逗号后使用一个或多个空格
        "comma-spacing": ["error", { before: false, after: true }],
        // 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
        "comma-style": ["error", "last"],
        // 禁止在计算属性内使用空格
        "computed-property-spacing": [
            "error",
            "never",
            { enforceForClassMembers: true },
        ],
        // 禁止在函数名和开括号之间有空格
        "func-call-spacing": ["error", "never"],
        // 禁止在对象字面量的键和冒号之间存在空格,要求在对象字面量的冒号和值之间存在至少有一个空格
        "key-spacing": ["error", { beforeColon: false, afterColon: true }],
        // 关键字之前至少有一个空格,在关键字之后至少有一个空格
        "keyword-spacing": ["error", { before: true, after: true }],
        // 注释周围有空行
        "lines-around-comment": [
            "off",
            {
                "beforeBlockComment": true, // 要求在块级注释之前有一空行
            }
        ],
        // 要求在类成员之后有一行空行
        "lines-between-class-members": [
            "error",
            "always",
            { exceptAfterSingleLine: true },
        ],
        // 三元操作数中间换行：如果表达式跨越多个行，则在三元表达式的操作数之间强制换行
        "multiline-ternary": ["error", "always-multiline"],
        // 方法链中每个调用都有一个换行符
        "newline-per-chained-call": ["error", {
            "ignoreChainWithDepth": 2
        }],
        // 禁止使用 空格 和 tab 混合缩进
        "no-mixed-spaces-and-tabs": "error",
        // 不允许多个空行
        "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
        //  禁止属性前有空白
        "no-whitespace-before-property": "error",
        // 强制在花括号内使用一致的换行符
        "object-curly-newline": ["error", { multiline: true, consistent: true }],
        // 强制在大括号中使用一致的空格
        "object-curly-spacing": ["error", "always"],
        // 要求把换行符放在操作符前面
        "operator-linebreak": ["error", "before"],
        // 当没有严格要求时，禁止对象字面量属性名称使用引号
        // consistent-as-needed 如果有属性名称要求使用引号，则所有的属性名称都要使用引号；否则，禁止所有的属性名称使用引号
        "quote-props": ["error", "as-needed"],
        // 分号之前禁止有空格,分号之后强制有空格
        "semi-spacing": ["error", { before: false, after: true }],
        // 块之前的空格
        "space-before-blocks": ["error", {
            "functions": "always", "keywords": "never", "classes": "never"
        }],
        // 要求或禁止函数圆括号之前有一个空格
        "space-before-function-paren": ["error", "always"],
        // 强制圆括号内没有空格
        "space-in-parens": ["error", "never"],
        // 要求中缀操作符周围有空格
        "space-infix-ops": "error",
        // 要求或禁止在一元操作符之前或之后存在空格
        "space-unary-ops": ["error", { words: true, nonwords: false }],
        // 注释前有空白
        "spaced-comment": [
            "error",
            "always",
            {
                line: {
                    markers: ["/"],
                    exceptions: ["/", "#"],
                },
                block: {
                    markers: ["!"],
                    exceptions: ["*"],
                    balanced: true,
                },
            },
        ],
        // 当大括号是可以省略的，强制不使用它们
        "arrow-body-style": ["error", "as-needed"],
        // 在可以省略括号的地方强制不使用括号
        "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
        // 要求箭头函数的箭头前后有空格
        "arrow-spacing": ["error", { before: true, after: true }],
        // 强制 generator 函数中 * 号周围有空格
        "generator-star-spacing": ["error", { before: true, after: true }],
        // 强制在 yield* 表达式中 * 周围使用空格
        "yield-star-spacing": ["error", "both"],
        // 模板字符串中禁止花括号内出现空格
        "template-curly-spacing": ["error", "never"],
        "no-var": "warn",
        "object-shorthand": ["warn", "properties"],

        "accessor-pairs": [
            "error",
            { setWithoutGet: true, enforceForClassMembers: true },
        ],
        "array-bracket-spacing": ["error", "never"],
        "array-callback-return": [
            "error",
            {
                allowImplicit: false,
                checkForEach: false,
            },
        ],
        "arrow-spacing": ["error", { before: true, after: true }],
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        camelcase: [
            "error",
            {
                allow: ["^UNSAFE_"],
                properties: "never",
                ignoreGlobals: true,
            },
        ],
        "comma-dangle": [
            "error",
            {
                arrays: "never",
                objects: "never",
                imports: "never",
                exports: "never",
                functions: "never",
            },
        ],
        "comma-spacing": ["error", { before: false, after: true }],
        "comma-style": ["error", "last"],
        "computed-property-spacing": [
            "error",
            "never",
            { enforceForClassMembers: true },
        ],
        "constructor-super": "error",
        curly: ["error", "multi-line"],
        "default-case-last": "error",
        "dot-location": ["error", "property"],
        "dot-notation": ["error", { allowKeywords: true }],
        "eol-last": "error",
        eqeqeq: ["error", "always", { null: "ignore" }],
        "func-call-spacing": ["error", "never"],
        "generator-star-spacing": ["error", { before: true, after: true }],
        "key-spacing": ["error", { beforeColon: false, afterColon: true }],
        "keyword-spacing": ["error", { before: true, after: true }],
        "lines-between-class-members": [
            "error",
            "always",
            { exceptAfterSingleLine: true },
        ],
        "multiline-ternary": ["error", "always-multiline"],
        "new-cap": ["error", { newIsCap: true, capIsNew: false, properties: true }],
        "new-parens": "error",
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-const-assign": "error",
        "no-constant-condition": ["error", { checkLoops: false }],
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-useless-backreference": "error",
        "no-empty": ["error", { allowEmptyCatch: true }],
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": ["error", "functions"],
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-import-assign": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
        "no-lone-blocks": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-prototype-builtins": "error",
        "no-useless-catch": "error",
        "no-mixed-operators": [
            "error",
            {
                groups: [
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"],
                ],
                allowSamePrecedence: true,
            },
        ],
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-redeclare": ["error", { builtinGlobals: false }],
        "no-regex-spaces": "error",
        "no-return-assign": ["error", "except-parens"],
        "no-self-assign": ["error", { props: true }],
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": ["error", { defaultAssignment: false }],
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": [
            "error",
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true,
            },
        ],
        "no-unused-vars": [
            "error",
            {
                args: "none",
                caughtErrors: "none",
                ignoreRestSiblings: true,
                vars: "all",
            },
        ],
        "no-use-before-define": [
            "error",
            { functions: false, classes: false, variables: false },
        ],
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-void": "error",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "object-curly-newline": ["error", { multiline: true, consistent: true }],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": [
            "error",
            { allowMultiplePropertiesPerLine: true },
        ],
        "one-var": ["error", { initialized: "never" }],
        "operator-linebreak": [
            "error",
            "after",
            { overrides: { "?": "before", ":": "before", "|>": "before" } },
        ],
        "padded-blocks": [
            "error",
            { blocks: "never", switches: "never", classes: "never" },
        ],
        "prefer-const": ["error", { destructuring: "all" }],
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
        "quote-props": ["error", "as-needed"],
        "rest-spread-spacing": ["error", "never"],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "always"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": ["error", { words: true, nonwords: false }],
        "spaced-comment": [
            "error",
            "always",
            {
                line: { markers: ["*package", "!", "/", ",", "="] },
                block: {
                    balanced: true,
                    markers: ["*package", "!", ",", ":", "::", "flow-include"],
                    exceptions: ["*"],
                },
            },
        ],
        "symbol-description": "error",
        "template-curly-spacing": ["error", "never"],
        "template-tag-spacing": ["error", "never"],
        "unicode-bom": ["error", "never"],
        "use-isnan": [
            "error",
            {
                enforceForSwitchCase: true,
                enforceForIndexOf: true,
            },
        ],
        "valid-typeof": ["error", { requireStringLiterals: true }],
        "wrap-iife": ["error", "any", { functionPrototypeMethods: true }],
        "yield-star-spacing": ["error", "both"],
        yoda: ["error", "never"],

        "import/export": "error",
        "import/first": "error",
        "import/no-absolute-path": [
            "error",
            { esmodule: true, commonjs: true, amd: false },
        ],
        "import/no-duplicates": "error",
        "import/no-named-default": "error",
        "import/no-webpack-loader-syntax": "error",

        /**
         * @see https://github.com/eslint-community/eslint-plugin-promise/blob/HEAD/docs/rules/param-names.md
         */
        "promise/param-names": "error",
    },
};
