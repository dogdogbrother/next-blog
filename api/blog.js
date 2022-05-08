import http from './config'

// 添加
export function addBlog(data) {
  return http({
    url: '/blog',
    method: 'post',
    data
  })
}

// 博客列表
export function getBlogList(params) {
  return http({
    url: '/blog',
    method: 'get',
    params
  })
}