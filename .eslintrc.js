module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'indent': [2, 4, {
            "SwitchCase": 1
        }], //4个空格缩进
        'comma-style': ["error", "first", {
            "exceptions": {
                "ArrayExpression": true,//忽略数据和对象字面的逗号格式
                "ObjectExpression": true
            }
        }],
        "semi": [2, "never"], //不使用分号结尾
        'no-floating-decimal': [2], //填写完整的小位数
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}