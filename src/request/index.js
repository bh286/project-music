//index.js 1获取axios实例 2请求和响应拦截

import axios from "axios";

let service = axios.create({
    baseURL:'/api',
    timeout:6000,
})

//请求拦截
service.interceptors.request.use(
    config=>{
        return config;
    },
    err=>{
        return Promise.reject(err)
    }
)

//响应拦截
service.interceptors.response.use(
    response=>{
        return response.data;
    },
    err=>{
        return Promise.reject(err)
    }
)

export default service
