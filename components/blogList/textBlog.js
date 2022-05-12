import styles from './blog.module.scss'
import { dateWidget, blogInfo } from './index'

function TextBlog(props) {
  const { data } = props
  return <div className={styles.card}>
    {dateWidget(`2022-02-02`)}
    {blogInfo(data)}
  </div>
}

export default TextBlog