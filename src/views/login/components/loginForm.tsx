import { Button, Form, Input } from 'antd';
import { loginApi } from '@/api/modules/login';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const LoginForm: React.FC = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    // 获取token
    const { data } = await loginApi(values);
    Cookies.set('token', (data as any).token);
    navigate('/home');
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 5 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="large"
      form={form}
    >
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
      </Form.Item>

      <Form.Item<FieldType> name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item>
        <div className="login-btn">
          <Button
            type="default"
            onClick={() => {
              form.resetFields();
            }}
          >
            重制
          </Button>
          <Button type="primary" htmlType="submit">
            登陆
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
