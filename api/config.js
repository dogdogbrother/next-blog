import axios from 'axios'
import { getCookie, delCookie } from 'utils/cookie'

const http = axios.create()

http.interceptors.request.use(
  config => {
    const token = getCookie('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    } 
    return config
  }
)
http.interceptors.response.use(
  response => {
    const { data, status: _ } = response
    return data
  },
  err => {
    const { data:msg = "网络错误", status = 500 } = err.response || {}
    if (status === 401) {
      delCookie('token')
      // router.push('/login')
    }
    return Promise.reject({
      status,
      msg
    })
  }
)

export default http