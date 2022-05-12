import MarkDown from 'markdown-to-jsx'
import styles from './blog.module.scss'

export default function Blog({ blogInfo = {} }) {
  const { content, title } = blogInfo
  return <div className={styles.wrap}>
    {JSON.stringify(blogInfo)}
    <h2>{title}</h2>
    <MarkDown>{content}</MarkDown>
  </div>
}
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/blog/id`)
  const blogs = await res.json()
  const paths = blogs.map(blog => ({params: { id: String(blog.id)}}))
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const res = await fetch(`http://localhost:3000/blog/info/${id}`)
  const blogInfo = await res.json()
  return {
    props: {
      blogInfo
    }
  }
}

Blog.layout = null
