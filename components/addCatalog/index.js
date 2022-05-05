import { Button, Drawer, Form, Input, Radio } from 'antd'
import { observer } from 'mobx-react-lite'
import { useStore } from 'store/index'
import { useEffect, useState } from 'react'
import { addCatalogList } from 'api/catalog'
import styles from './add.module.scss'
import { uploadImg } from 'api/upload'
function AddCatalog() {
  const { catalog } = useStore()
  const { state } = catalog.catalogInfo
  const [form] = Form.useForm()
  const [uploadLoading, setUploadLoading] = useState(false)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [url, setUrl] = useState('')

  useEffect(() => {
    if(state) {
      form.resetFields()
    }
  }, [state])
  function onSubmit(values) {
    setSubmitLoading(true)
    addCatalogList({
      ...values,
      url
    }).then(() => {
      // 添加成功了,就触发下获取接口
      catalog.setCatalogDrawer(false)
      catalog.getCatalog()
    }).finally(() => {
      setSubmitLoading(false)
    })
  }
  function onUpload({ target }) {
    const file = target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    setUploadLoading(true)
    uploadImg(formData)
      .then(res => {
        setUrl(res)
      })
      .finally(() => setUploadLoading(false))
  }
  const colorOptions = [
    { label: '明亮', value: 'bright' },
    { label: '深色', value: 'dark' }
  ]
  return <Drawer 
    width="460px"
    title="添加博客目录"
    placement='right' 
    visible={catalog.catalogInfo.state}
    onClose={() => catalog.setCatalogDrawer(false)}
  >
    <Form
      form={form}
      labelCol={{ span: 5 }}
      autoComplete="off"
      onFinish={onSubmit}
      requiredMark={false}
      labelAlign="left"
      colon={false}
      initialValues={{
        catalogName: '',
        colorTheme: 'bright',
        subject: '',
        describe: '',
      }}
    >
      <Form.Item
        label="目录名称"
        name="catalogName"
        rules={[
          { required: true, message: '目录名称不能为空' },
          { min: 2, max: 12, message: '目录名称2到12个字', validateTrigger: 'onBlur' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="banner图片"
        name="url"
        extra="你可以不选,但会默认随机分配个图片"
      >
        <div className={styles.fileWrap}>
          {
            url ? <div 
              className={styles.view}
              style={{backgroundImage: `url(${url})`}}
            ></div> : null
          }
          <label 
            htmlFor="file-input" 
            className={uploadLoading ? styles.uploadLoading : styles.btn}
          >{url ? '更换' : '添加'}图片</label>
          <input 
            id="file-input" 
            type="file" 
            accept="image/*" 
            onChange={onUpload}
          />
        </div>
      </Form.Item>
      <Form.Item
        label="主题概要"
        name="subject"
        extra="你也可以不写,默认展示目录名称"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="描述说明"
        name="describe"
        rules={[{ required: true, message: '描述下这个目录吧' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="文字色系"
        name="colorTheme"
        extra="根据banner图片的明亮度选择文字的明暗"
      >
        <Radio.Group
          options={colorOptions}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{ offset: 5 }}
      >
        <Button loading={submitLoading} type='primary' htmlType="submit">创建</Button>
      </Form.Item>
    </Form>
  </Drawer>
}

export default observer(AddCatalog)