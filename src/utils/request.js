import axios from 'axios'

// 对axios进行二次封装
let cancel = null
let promiseArr = {}
const CancelToken = axios.CancelToken

axios.defaults.baseURL = '/api'
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 3000

// 请求拦截器
axios.interceptors.request.use(config => {
  // 发起请求时，取消当前正在进行的相同请求
  if (promiseArr[config.url]) {
    promiseArr[config.url]('操作取消')
    promiseArr[config.url] = cancel
  } else {
    promiseArr[config.url] = cancel
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 相应拦截器~ 即异常处理
axios.interceptors.response.use(res => {
  return res
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '错误请求'
        break
      case 401:
        err.message = '未授权，请重新登录'
        break
      case 403:
        err.message = '拒绝访问'
        break
      case 404:
        err.message = '请求错误，未找到资源'
        break
      case 405:
        err.message = '请求方法未允许'
        break
      case 408:
        err.message = '请求超时'
        break
      case 500:
        err.message = '服务端错误'
        break
      case 501:
        err.message = '网络未实现'
        break
      case 502:
        err.message = '网络错误'
        break
      case 503:
        err.message = '服务不可用'
        break
      case 504:
        err.message = '网络超时'
        break
      case 505:
        err.message = 'HTTP版本不支持该请求'
        break
      default:
        err.message = `连接错误, ${err.response.status}`
    }
  } else {
    err.message = '连接到服务器失败'
  }
  return Promise.resolve(err.response)
})

export default {
  // get请求
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      }).catch(err => console.error(err))
    })
  },

  // post请求
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: params,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      }).catch(err => console.error(err))
    })
  }
}
