import styles from './header.module.scss'
import { Dropdown, Menu } from 'antd'
import Link from 'next/link'
import AddCatalog from '../addCatalog/index'
import { useStore } from 'store/index'
import { useEffect } from 'react'

export default function HeaderNav() {
  const { catalog } = useStore()
  useEffect(() => {
    console.log(1);
    // catalog.getCatalog()
  }, [])
  const menu = (
    <Menu
      onClick={() => catalog.setCatalogDrawer(true)}
      items={[
        { label: '添加博客目录' },
      ]}
    />
  )
  // 添加博客目录
  function addCatalog() {
    alert('添加博客目录')
  }
  return <div className={styles.wrap}>
    <div className={styles.avatar}></div>
    <div className={styles.rightHeader}>
      <nav className={styles.nav}>
        <Link href='/login'>css文章</Link>
        <Link href='/login'>js文章</Link>
      </nav>
      <Dropdown.Button type='primary' overlay={menu}>
        写文章
      </Dropdown.Button>
    </div>
    <AddCatalog />
  </div>
}