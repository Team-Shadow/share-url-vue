import { get, post, del, put } from './http'
const base = '/api'
export default function () {
    const api = {
        user: params => get(`${base}/user`, params), // 获取当前登入用户
        logout: params => del(`${base}/user`, params), // 用户退出
        // login: params => post(`${base}/user/login`, params), // 登入
        // posts: params => get(`${base}/posts`, params), // 获取所有笔记
        // postGet: params => get(`${base}/posts/${params.id}`, params), // 获取笔记
        // postDel: params => del(`${base}/posts/${params.id}`, params), // 删除笔记
        // postMod: params => put(`${base}/posts/${params.id}`, params), // 修改笔记
        // postAdd: params => post(`${base}/posts`, params), // 增加笔记
        // regist: params => post(`${base}/user`, params), // 注册
        // getSite: params => get(`${base}/site`, params), // 获取站点信息
        // setSite: params => post(`${base}/site`, params), // 配置站点信息
    }

    return api
}