export const username = [
  {
    required: true,
    message: '用户名不能为空',
  },
  {
    min: 2,
    max: 8,
    message: '用户名长度2~8位',
    validateTrigger: 'onBlur'
  }
]

export const password = [
  {
    required: true,
    message: '密码不能为空!',
  },
  {
    min: 6,
    message: '密码长度不能少于6位',
    validateTrigger: 'onBlur'
  },
]