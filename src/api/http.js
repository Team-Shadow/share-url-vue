import axios from 'axios'

function get(url, params) {
    return axios.get(url, { params }).then(middleware)
}

function post(...args) {
    return axios.post(...args).then(middleware)
}

function del(url, params) {
    return axios.delete(url, { params }).then(middleware)
}

function put(url, params) {
    return axios.put(url, params).then(middleware)
}

function middleware(res) {
    if (res.data.err) { // 错误提示
        alert(res.data.err)
    }
    if (res.data.login) { // 登入提示
        location.href = '/login'
    }
    return res
}

exports.get = get
exports.post = post
exports.del = del
exports.put = put