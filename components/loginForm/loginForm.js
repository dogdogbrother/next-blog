import { Form, Input, Button } from 'antd'
import styles from './form.module.scss'

export default function LoginForm(props) {
  const { onSwitch, onFinish } = props

  return <Form 
    requiredMark={false}
    labelAlign='left'
    autoComplete="off"
    onFinish={onFinish}
  >
    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: '用户名不能为空',
        },
      ]}
    >
      <Input placeholder='请输入用户名'/>
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: '密码不能为空!',
        },
      ]}
    >
      <Input.Password placeholder='请输入密码'/>
    </Form.Item>
    <div className={styles.switch}>
      <span onClick={() => onSwitch('register')}>去注册</span>
    </div>
    <Button 
      style={{marginTop: '10px'}}
      type="primary"
      htmlType="submit" 
      block 
      size='large'
    >登录</Button>
  </Form>
} 