import axios from 'axios'

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
    config => {
        //1. 配置请求头token
        //2. 处理参数格式
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

/**
 * 响应拦截器
 */
axios.interceptors.response.use(
    resp => {
        //1. token失效
        //2. 接口未订阅
        return resp.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default axios