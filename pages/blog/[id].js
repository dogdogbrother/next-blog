import styles from './blog.module.scss'
import markdownToHtml from '../../lib/markdown'
import Head from 'next/head'

export default function Blog({ blogInfo = {}, content }) {
  const { title, coverUrl, createdAt } = blogInfo
  return <>
    <Head>
      <link
          rel='stylesheet'
          type='text/css'
          href="/css/prism-tomorrow.css"
        />
    </Head>
    <div className={styles.wrap}>
      {
        coverUrl ? <div
          className={styles.coverUrl} 
          style={{backgroundImage: `url(${coverUrl})`}}
        /> : null
      }
      <h2 className={styles.title}>{title}</h2>
      <address className={styles.address}>
        <span>依然范德彪</span> 写作于 {createdAt.split(' ')[0]}
      </address>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </> 
}
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3001/blog/id`)
  const blogs = await res.json()
  const paths = blogs.map(blog => ({params: { id: String(blog.id) }}))
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const res = await fetch(`http://localhost:3001/blog/info/${id}`)
  const blogInfo = await res.json()
  const content = await markdownToHtml(blogInfo.content || '')
  return {
    props: {
      blogInfo,
      content
    }
  }
}

Blog.layout = null
