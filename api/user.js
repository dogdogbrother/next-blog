import http from './config'

// 用户注册
export function register(data) {
  return http({
    url: '/user/register',
    method: 'post',
    data
  })
}