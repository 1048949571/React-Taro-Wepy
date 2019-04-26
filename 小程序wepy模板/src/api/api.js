import wepy from 'wepy'

import { prodhttpurl } from './config.js'
let prodhttpur = prodhttpurl


const get = (url, params = {}) => {
    console.log(url, params, '请求封装')
    let req = wepy.request({
        url: prodhttpur + url, //开发者服务器接口地址",
        data: params, //请求的参数",
        method: 'GET',
        dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse,

    })
    return req
}
const post = (url, params = {}) => {
    console.log(url, params, '请求封装')
    let req = wepy.request({
        url: prodhttpur + url, //开发者服务器接口地址",
        data: params, //请求的参数",
        method: 'POST',
        dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse,

    })
    return req
}
const axios = {};
axios.get = (params) => {
    return get('/public/position/cities',params);
}
axios.post = (params) => {
    return post('/public/position/cities',params);
}
console.log(axios, 'api')
export default axios