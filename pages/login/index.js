import styles from './login.module.scss'
import { useState } from 'react'

// 随机出 1/2/3/4 作为背景图
export default function Login() {
  return <div className={styles.wrap}>
    <div className={styles.mask}>
      <div className={styles.loginBox}>
        <div className={styles.avatar}></div>
      </div>
    </div>
  </div>
}