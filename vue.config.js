//路径别名
const alias = {
    '@views': '@/views/',
    '@comps': '@/components/',
    '@request': '@/request/',
    '@store': '@/store/',
    '@router': '@/router/',
    '@assets': '@/assets',
}

module.exports = {
    devServer: {
        port: 8088
    },
    configureWebpack: {
        resolve: {
            alias
        }
    },
}