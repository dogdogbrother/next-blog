import http from './config'

// 添加标签
export function addTag(data) {
  return http({
    url: '/tag',
    method: 'post',
    data
  })
}

// 添加标签
export function getTagList() {
  return http({
    url: '/tag',
    method: 'get',
  })
}