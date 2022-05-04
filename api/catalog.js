import http from './config'

// 目录列表
export function getCatalogList() {
  return http({
    url: '/catalog',
    method: 'get'
  })
}

// 目录列表
export function addCatalogList(data) {
  return http({
    url: '/catalog',
    method: 'post',
    data
  })
}