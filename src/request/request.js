import axios from './interceptors'

let baseURL = process.env.NODE_ENV === 'production' ? '生产环境' : 'https://cnodejs.org/api/v1'

export const request = (options) => {
    let settings = Object.assign({
        method: 'post',
        timeout: 10000
    }, { baseURL, ...options })

    return axios(settings)
}

