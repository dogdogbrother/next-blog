import styles from './blog.module.scss'
import { Divider } from 'antd'

function BlogCard(props) {
  const { data } = props

  return <div className={styles.card}>
    <div 
      className={styles.cover} 
      style={{backgroundImage: `url(${data.coverUrl})`}}
    >
      <div className={styles.fixDate}>{data.updatedAt.split(' ')[0]}</div>
      
    </div>
    <div className={styles.blogInfo}>
      <h2>{data.title}</h2>
      <p className={styles.content}>{data.content}</p>
      <div className={styles.border}></div>
      <div className={styles.footer}>
        <span className={styles.update}>更新 2022-12-13 13:01:22</span>
      </div>
    </div>
    {JSON.stringify(data)}
  </div>
}

export default BlogCard