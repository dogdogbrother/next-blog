import styles from './blog.module.scss'
import { dateWidget, blogInfo } from './index'

function TextBlog(props) {
  const { data, toBlog } = props
  return <div className={styles.card} onClick={toBlog}>
    {dateWidget(data.createdAt.split(' ')[0])}
    {blogInfo(data)}
  </div>
}

export default TextBlog