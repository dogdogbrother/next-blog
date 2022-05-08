import styles from './header.module.scss'
import { Dropdown, Menu, Button } from 'antd'
import AddCatalog from '../addCatalog/index'
import { useStore } from 'store/index'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

function HeaderNav() {
  const { catalog } = useStore()
  const { list, currentCatalogId, loading: catalogLoading  } = catalog.catalogInfo
  const { push } = useRouter()
  const menu = (
    <Menu
      onClick={() => catalog.setCatalogDrawer(true)}
      items={[
        { label: '添加博客目录' },
      ]}
    />
  )
  // 去写博客页面
  function toAddBlog() {
    push({
      pathname: '/addblog',
      query: { catalogId: currentCatalogId }
    })
  }


  return <div className={styles.wrap}>
    <div className={styles.avatar}></div>
    <div className={styles.rightHeader}>
      <nav className={styles.nav}>
        {
          list.map(item => {
            return <span 
              key={item.id}
              onClick={() => catalog.changeCatalog(item.id)}
              className={currentCatalogId === item.id ? styles.active : styles.none}
            >{item.catalogName}</span>
          })
        }
      </nav>
      {
        (!catalogLoading && !list.length)
        ? <Button 
          type='primary' 
          shape='round'
          onClick={() => catalog.setCatalogDrawer(true)}
        >创建目录</Button> 
        : <Dropdown.Button type='primary' overlay={menu} onClick={toAddBlog}>
          写文章
        </Dropdown.Button>
      }
    </div>
    <AddCatalog />
  </div>
}

export default observer(HeaderNav)