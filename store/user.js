import { getUserInfo  } from 'api/user'
import { getCookie } from 'utils/cookie'
const userStore = {
  userInfo: {
    nickname: '',
    avatar: '',
    id: null,
    token: null
  },
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

export default userStore