import { Button, Drawer, Form, Input, Radio } from 'antd'
import { observer } from 'mobx-react-lite'
import { useStore } from 'store/index'
import { useEffect } from 'react'
import { addCatalogList } from 'api/catalog'

function AddCatalog() {
  const { catalog } = useStore()
  const { state } = catalog.catalogInfo
  const [form] = Form.useForm()

  useEffect(() => {
    if(state) {
      form.resetFields()
    }
  }, [state])
  function onSubmit(values) {
    console.log(values)
    addCatalogList().then(res => {
      console.log(res);
    })
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
      initialValues={{colorTheme: 'bright'}}
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
        <div>
          <Button type='primary'>添加图片</Button>
        </div>
      </Form.Item>
      <Form.Item
        label="主题"
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
        <Button type='primary' htmlType="submit">创建</Button>
      </Form.Item>
    </Form>
  </Drawer>
}

export default observer(AddCatalog)