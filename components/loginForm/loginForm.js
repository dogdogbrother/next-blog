import { Form, Input, Button } from 'antd'
import styles from './form.module.scss'
import { username, password } from './rules'

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
      rules={username}
    >
      <Input placeholder='请输入用户名'/>
    </Form.Item>
    <Form.Item
      name="password"
      rules={password}
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