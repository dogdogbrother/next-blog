import http from './config'

// 用户注册
export function getCatalogList() {
  return http({
    url: '/catalog/register',
    method: 'get'
  })
}