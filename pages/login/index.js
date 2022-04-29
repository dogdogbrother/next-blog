import styles from './login.module.scss'
import { useState } from 'react'
import LoginForm from 'components/loginForm/loginForm'
import RegisterForm from 'components/loginForm/registerForm'

export default function Login() {
  // 当前是登录还是注册, login/register
  const [loginAction, setLoginAction] = useState('login') 

  function onFinish(values) {
    alert('狠狠的登录')
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