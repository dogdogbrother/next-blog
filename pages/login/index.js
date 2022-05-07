import styles from './login.module.scss'
import { useState } from 'react'
import LoginForm from 'components/loginForm/loginForm'
import RegisterForm from 'components/loginForm/registerForm'
import { register, login } from 'api/user'
import { useStore } from 'store/index'
import { useRouter } from 'next/router'
import { setCookie } from 'utils/cookie'

export default function Login() {
  const store = useStore()
  const { push } = useRouter()

  // 当前是登录还是注册, login/register
  const [loginAction, setLoginAction] = useState('login')

  function onFinish(values) {
    postData(values).then(res => {
      const { token } = res
      store.user.setUserInfo(res)
      setCookie('token', token)
      push('/')
    })
  }
  function postData(values) {
    if (loginAction === 'login') {
      return login(values)
    }
    return register(values)
  }
  return <div className={styles.wrap}>
    <div className={styles.mask}>
      <div className={styles.loginBox}>
        <div className={styles.avatar}></div>
        {
          loginAction === 'login' ?
          <LoginForm onSwitch={setLoginAction} onFinish={onFinish} /> :
          <RegisterForm onSwitch={setLoginAction} onFinish={onFinish} />
        }
      </div>
    </div>
  </div>
}

Login.layout = null