import http from './http'
const base = '/api'
export default function () {
    const { get, post, del, put } = http.call(this)

    const api = {
        user: params => get(`${base}/user`, params), // 获取当前登入用户
        logout: params => del(`${base}/user`, params), // 用户退出
        sendUrl: params => post(`${base}/url`, params), // 分享链接
        searchUrl: params => get(`${base}/url`, params), // 搜索链接
        urlDetail: id => get(`${base}/url/${id}`), // 链接详情 
    }

    return api
}