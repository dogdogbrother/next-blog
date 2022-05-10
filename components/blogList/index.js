import styles from './blog.module.scss'
import BlogCard from './blogCard'

function BlogList(props) {
  const { list } = props
  return <div className={styles.listWrap}>
    {
      list.map(item => {
        return <BlogCard data={item}/>
      })
    }
  </div>
}
export default BlogList                                                                   