import styles from './header.module.scss'
import { Button } from 'antd'
import Link from 'next/link'

export default function HeaderNav() {
  return <div className={styles.wrap}>
    <div className={styles.avatar}></div>
    <div className={styles.rightHeader}>
      <nav className={styles.nav}>
        <Link href='/login'>css文章</Link>
        <Link href='/login'>js文章</Link>
      </nav>
      <Button type='primary' shape='round'>写文章</Button>
    </div>
  </div>
}