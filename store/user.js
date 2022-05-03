import { getUserInfo  } from 'api/user'
import { getCookie } from 'utils/cookie'

export const initValue = {
  nickname: '',
  avatar: '',
  id: null,
  token: null
}
const userStore = () => {
  return {
    userInfo: {},
    setUserInfo(value) {
      this.userInfo = value
    },
    getUserInfo() {
      if (!getCookie('token')) return
      getUserInfo().then(res => {
        this.setUserInfo(res)
      })
    }
  }
}

export default userStore