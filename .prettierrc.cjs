module.exports = {
    // 超过最大值换行
    printWidth: 130,
    // 缩进字节数
    tabWidth: 2,
    // 结尾不用分号(true有，false没有)
    semi: true,
    // 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
    endOfLine: 'auto',
    // 使用单引号(true单引号，false双引号)
    singleQuote: true,
    // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
    trailingComma: 'none',
    // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    bracketSpacing: true,
    jsxBracketSameLine: false,
    // Vue文件脚本和样式标签缩进
    vueIndentScriptAndStyle: false,
    'jsxBracketSameLine:': true,
    // 在html中空格是否是敏感的 "css" - 遵守CSS显示属性的默认值， "strict" - 空格被认为是敏感的 ，"ignore" - 空格被认为是不敏感的
    htmlWhitespaceSensitivity: 'ignore',
    wrapAttributes: true,
    overrides: [
        {
            files: '*.html',
            options: {
                parser: 'html'
            }
        }
    ]
};