import Head from 'next/head'
import styles from './home.module.scss'
import { useStore } from 'store/index'
import { Button } from 'antd'
import { observer } from 'mobx-react-lite'
// import { useEffect, useState } from 'react'

function Home() {
  const { catalog } = useStore()
  // 没有选择目录的情况下的初始显示
  const initCatalogInfo = {
    subject: 'welcome to my blog',
    describe: '记录些日常所见,碎碎念',
    url: '/img/login-bg-0.jpg'
  }
  const { list, currentCatalogId, loading: catalogLoading  } = catalog.catalogInfo
  const currentCatalog = list.find(item => item.id === currentCatalogId) || initCatalogInfo
  return (
    <div>
      <Head>
        <title>worn bus的博客</title>
        <meta 
          name="description" 
          content="作为个人的技术分享,内容包含但不限于js/javascript/css/react/vue/node/koa/前端/后端/mysql/linux/nginx" 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div 
          className={styles.exhibition}
          style={{backgroundImage: `url(${currentCatalog.url})`}}
        >
          <div className={styles.blogSummary}>
            <h2>{currentCatalog.subject}</h2>
            <p>{currentCatalog.describe}</p>
          </div>
        </div>

        {
          (!catalogLoading && !list.length) ? <div className={styles.emptyBtn}>
            <span>还没有文章和目录,要先有目录才能写文章哦</span>
            <Button 
              type='primary'
              shape='round'
              onClick={() => catalog.setCatalogDrawer(true)}
            >创建目录</Button>
          </div> : null
        }
        {/* <section className={styles.blogList}>

        </section> */}
      </div>
    </div>
  )
}

export default observer(Home)

