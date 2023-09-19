
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { FacebookOutlined } from '@ant-design/icons'


const App = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
      

const onFinish = (values) => {
  console.log('Success:', values);

  navigate('/form');
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

        const handleSubmit = event => {
          event.preventDefault();
      
          // You can perform any necessary validation here
      
          // Redirect to another page after form submission
             navigate('/form');
        };

    return(
      <div class="container text-center mt-5">
        <div className="  " style={{maxWidth:'600px', marginLeft:'200px'}}>
        <h1 class="text-success" style={{ marginTop:'100px'}}>Login </h1>
  <Form onSubmit={handleSubmit}
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 400,
      marginTop:100,
      marginLeft:80,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input value={username} onChange={(e) => setUsername(e.target.value)}/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password  value={password} onChange={(e) => setPassword(e.target.value)}/>
    </Form.Item>
    <Form.Item
      label="Number"
      name="Number"
      rules={[
        {
          required: true,
          message: 'Please input your number!',
        },
      ]}
    >
      <Input  value={number} onChange={(e) => setNumber(e.target.value)}/>
    </Form.Item>
    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
    Login
      </Button>
    </Form.Item>

<div className=''>
    <p>Or Sign Up Using</p>
</div>
{/* <div className='icon'>

<Button type="link" href="url://" icon={<FacebookOutlined  style={{fontSize:'35px'}}/>} />

</div> */}

  </Form>
  </div>
  </div>
    )
};
export default App;