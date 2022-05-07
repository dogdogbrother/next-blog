import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css"
import dynamic from "next/dynamic"
import { useState } from "react"
import styles from './addblog.module.scss'
import { Select, Button } from 'antd'
import { useStore } from 'store/index'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import AddTag from 'components/addTag'

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
)

function AddBlog() {
  const { catalog }  = useStore()
  const { query } = useRouter();
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const [tagState, setTagState] = useState(false)
  const [catalogId, setCatalogId] = useState(query.catalogId ? Number(query.catalogId) : '')
  function onChangeTital(event) {
    setTitle(event.target.value)
  }
  function onSubmit() {

  }
  return (
    <div>
      {/* <svg width="12" height="12" viewBox="0 0 20 20">
        <path fill="currentColor" d="M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z" ></path>
      </svg> */}
      <input 
        className={styles.title} 
        value={title}
        onChange={onChangeTital}
        placeholder="输入文章标题..." 
      />
      <MDEditor 
        height='calc(100vh - 108px)'
        value={value} 
        onChange={setValue}
      />
      <div className={styles.operate}>
        <div>
          <Select 
            defaultValue={catalogId} 
            style={{ width: 160, marginRight: '10px' }}
            onChange={setCatalogId}
          >
            {
              catalog.catalogInfo.list.map(item => <Select.Option key={item.id} value={item.id}>
                {item.catalogName}
              </Select.Option>)
            }
          </Select>
          <Button type="link" onClick={() => setTagState(true)}>选择标签</Button>
        </div>
        <Button type='primary' onClick={onSubmit}>发布</Button>
      </div>
      <AddTag tagState={tagState} setTagState={setTagState} />
    </div>
  );
}

AddBlog.layout = null

export default observer(AddBlog)




