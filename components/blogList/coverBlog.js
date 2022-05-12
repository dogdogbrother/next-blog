import styles from './blog.module.scss'
import { dateWidget, blogInfo } from './index'
function coverBlog(props) {
  const { data, toBlog } = props

  return <div className={styles.card}>
    <div 
      className={styles.cover} 
      style={{backgroundImage: `url(${data.coverUrl})`}}
    >
      {dateWidget(data.updatedAt.split(' ')[0])}
    </div>
    {blogInfo(data)}
  </div>
}

export default coverBlog