import Head from 'next/head'
import styles from './home.module.scss'
import { useStore } from 'store/index'

export default function Home() {
  const store = useStore()
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
      <div>worn bus的博客</div>
    </div>
  )
}

