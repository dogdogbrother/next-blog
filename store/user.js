
const userStore = {
  userInfo: {
    nickname: '',
    avatar: '',
    id: null,
    token: null
  },
  setUserInfo(value) {
    this.userInfo = value
  }
}

export default userStore