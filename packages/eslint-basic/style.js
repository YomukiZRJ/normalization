/**
 * javaSrcipt代码风格指南
 * @see http://eslint.cn/docs/rules
 */
module.exports = {
    rules: {
        // 缩进2空格
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
        // 强制使用单引号
        quotes: ['error', 'single'],
        // 强制不使用分号结尾
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
    }
}