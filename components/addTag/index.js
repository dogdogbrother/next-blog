import { Modal, Tag, Divider, Form, Input, Select, Button } from 'antd'
import { addTag, getTagList } from 'api/tag'
import { useState, useEffect } from 'react'
import styles from './tag.module.scss'

function AddTag(props) {
  const { tagState, setTagState } = props
  const [addTagLoading, setAddTagLoading] = useState(false)
  const [tags, setTags] = useState([])
  const [form] = Form.useForm()
  const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple']
  useEffect(() => {
    _getTagList()
  }, [])
  function onSubmit(values) {
    setAddTagLoading(true)
    addTag(values).then(() => {
      form.resetFields()
      _getTagList()
    }).finally(() => setAddTagLoading(false))
  }
  function _getTagList() {
    getTagList().then(res => {
      setTags(res)
    })
  }
  function handleOk() {
    setTagState(false)
  }
  function handleCancel() {
    setTagState(false)
  }
  function selectTag() {
    alert(2222)
  }
  return <Modal
    title="编辑标签" 
    visible={tagState}
    onOk={handleOk} 
    onCancel={handleCancel}
  >
    <div className={styles.tagBox}>
      {
        tags.map(tag => <Tag 
          key={tag.id} 
          color={tag.tagColor}
          onClick={selectTag}
        >{tag.tagName}</Tag>)
      }
    </div>
    <Divider />
    <Form 
      form={form}
      layout='inline'
      size='small'
      autoComplete="off"
      onFinish={onSubmit}
      requiredMark={false}
      labelAlign="left"
      colon={false}
      initialValues={{
        tagName: '',
        tagColor: ''
      }}
    >
      {/* ant-form-item-has-error */}
      <Form.Item 
        label="标签名"
        name="tagName"
        rules={[
          { required: true, message: '标签名不能为空' },
          { min: 2, max: 8, message: '标签名称2到8个字', validateTrigger: 'onBlur' }
        ]}
      >
        <Input style={{width: '110px'}} />
      </Form.Item>
      <Form.Item 
        label="标签颜色"
        name="tagColor"
        rules={[
          { required: true, message: '标签颜色不能为空' },
        ]}
      >
        <Select style={{width: '115px'}}>
          {
            colors.map(color => <Select.Option key={color} value={color}>
              <Tag color={color}>{color}</Tag>
            </Select.Option>)
          }
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType="submit" loading={addTagLoading}>增加标签</Button>
      </Form.Item>
    </Form>
  </Modal>
}

export default AddTag