import styles from './header.module.scss'
import { Dropdown, Menu } from 'antd'
import AddCatalog from '../addCatalog/index'
import { useStore } from 'store/index'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

function HeaderNav() {
  const { catalog } = useStore()

  useEffect(() => {
    catalog.getCatalog()
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
        {
          catalog.catalogInfo.list.map(item => {
            return <span 
              key={item.id}
            >{item.catalogName}</span>
          })
        }
      </nav>
      <Dropdown.Button type='primary' overlay={menu}>
        写文章
      </Dropdown.Button>
    </div>
    <AddCatalog />
  </div>
}

export default observer(HeaderNav)