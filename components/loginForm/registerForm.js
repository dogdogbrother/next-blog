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
      <Input placeholder='请输入用户名' />
    </Form.Item>
    <Form.Item
      name="password"
      rules={password}
    >
      <Input.Password placeholder='请输入密码' />
    </Form.Item>
    <Form.Item
      name="confirm"
      rules={[
        {
          required: true,
          message: '确认密码不能为空!',
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('两次输入密码不一致'));
          },
          validateTrigger: 'onBlur'
        }),
      ]}
    >
      <Input.Password placeholder='请确认密码' />
    </Form.Item>
    <div className={styles.switch}>
      <span onClick={() => onSwitch('login')}>去登录</span>
    </div>
    <Button 
      style={{marginTop: '10px'}}
      type="primary"
      htmlType="submit" 
      block 
      size='large'
    >注册</Button>
  </Form>
} 