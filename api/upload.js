import http from './config'

// 上传图片
export function uploadImg(form, onUploadProgress) {
  return http({
    url: '/upload/img',
    method: 'post',
    headers: {
      'content-type': 'multipart/form-data'
    },
    onUploadProgress,
    data: form
  })
}