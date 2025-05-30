import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import 'antd/dist/reset.css';
import { useNavigate } from 'react-router';
import { useForgetEmailPostMutation } from '../../Redux/services/authApis';
import toast from 'react-hot-toast';

const { Title, Text } = Typography;

const ForgetPassword = () => {
  const route = useNavigate();
  const [forgotPassword, { data, isLoading }] = useForgetEmailPostMutation();
  const onFinish = async (values) => {
    localStorage.removeItem('email');
    localStorage.setItem('email', values.email);
    const data = {
      email: values.email,
    };
    const res = await forgotPassword({ data }).unwrap();
    if (res?.success) {
      toast.success('please check your email for otp');
      route('/otp');
    } else {
      console.log('error', res);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#3872F0] p-4">
      <div className="bg-white relative shadow-lg rounded-2xl p-6 w-full max-w-lg text-center">
        <Title level={3} className="text-blue-500">
          {/* <Logo /> */}
        </Title>
        <div className="flex mb-6 flex-col items-start">
          <Title level={3} className="mb-1">
            Forgot Password
          </Title>
          <Text type="secondary">
            Enter your email address to reset your password
          </Text>
        </div>

        <Form requiredMark={false} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email address"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Enter a valid email address!' },
            ]}
            style={{
              marginTop: 10,
              marginBottom: 10,
              textAlign: 'start',
            }}
          >
            <Input
              placeholder="MichealScott@gmail.com"
              type="email"
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full !bg-[#3872F0]"
            style={{ marginTop: 10 }}
          >
            {isLoading ? <span className="loader"></span> : 'Continue with Email'}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;
