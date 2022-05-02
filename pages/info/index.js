import Head from 'next/head'
import styles from './home.module.scss'
import { useStore } from 'store/index'

export default function Home() {
  const store = useStore()
  return (
    <div>
      <Head>
        <title>worn bus blog</title>
        <meta name="description" content="王浩的博客" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrap}>
        <div></div>
        <div>这里是我的内容</div>
      </div>
    </div>
  )
}

Home.layout = null
