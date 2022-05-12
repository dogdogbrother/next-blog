import styles from './blog.module.scss'
import BlogCard from './coverBlog'
import TextBlog from './textBlog'
import { Tag } from 'antd'
import { useRouter } from 'next/router'
import { markdownToTxt } from 'markdown-to-txt'

function BlogList(props) {
  const { list } = props
  const { push } = useRouter()
  return <div className={styles.listWrap}>
    {
      list.map(item => {
        return item.coverUrl 
          ? <BlogCard key={item.id} data={item} toBlog={() => push(`/blog/${item.id}`)} /> 
          : <TextBlog key={item.id} data={item} toBlog={() => push(`/blog/${item.id}`)} />
      })
    }
  </div>
}

/**
 * @description 返回上方显示时间的小组件
 */ 
export function dateWidget(date) {
  return <div className={styles.dateWidget}>{date}</div>
}

/**
 * @description 返回博客主要内容
 */ 
export function blogInfo(data) {
  const { title, content, tags } = data
  return  <div className={styles.blogInfo} key='123'>
    <h2>{title}</h2>
    <p className={styles.content}>{markdownToTxt(content)}</p>
    <div className={styles.border}></div>
    <div className={styles.footer}>
      <span className={styles.update}>更新 2022-12-13 13:01:22</span>
      {
        tags.map(tag => <Tag
          key={tag.id}
          color={tag.tagColor}
        >{tag.tagName}</Tag>)
      }
    </div>
  </div>
}
export default BlogList                                                                   