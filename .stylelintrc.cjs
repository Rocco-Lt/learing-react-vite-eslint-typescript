module.exports = {
    extends: [
        // 配置stylelint拓展插件
        'stylelint-config-standard',
        // 配置stylelint和prettier兼容
        "stylelint-config-prettier",],
    plugins: ['stylelint-order'],
    custonSyntax: 'postcss-less',
    rules: {
        indentation: [
            2,
            {
                severity: 'warning',
            },
        ],
        'no-descending-specificity': null,
        // 属性的排序
        'order/properties-order': [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'display',
            'justify-content',
            'align-items',
            'float',
            'clear',
            'overflow',
            'overflow-x',
            'overflow-y',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'border',
            'border-style',
            'border-width',
            'border-color',
            'border-top',
            'border-top-style',
            'border-top-width',
            'border-top-color',
            'border-right',
            'border-right-style',
            'border-right-width',
            'border-right-color',
            'border-bottom',
            'border-bottom-style',
            'border-bottom-width',
            'border-bottom-color',
            'border-left',
            'border-left-style',
            'border-left-width',
            'border-left-color',
            'border-radius',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'font-size',
            'font-family',
            'font-weight',
            'text-align',
            'text-justify',
            'text-indent',
            'text-overflow',
            'text-decoration',
            'white-space',
            'color',
            'background',
            'background-position',
            'background-repeat',
            'background-size',
            'background-color',
            'background-clip',
            'opacity',
            'filter',
            'list-style',
            'outline',
            'visibility',
            'box-shadow',
            'text-shadow',
            'resize',
            'transition',
        ],
        "selector-class-pattern": null, // 强制选择器类名的格式
    },
};
