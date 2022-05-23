import { initializeApp } from "firebase/app";
import { Button, Form, Input } from 'antd';

const firebaseConfig = {
  apiKey: "AIzaSyBfNVg55My3l48_vPXthxga11GWYSzng-k",
  authDomain: "my-first-firestore-bc.firebaseapp.com",
  projectId: "my-first-firestore-bc",
  storageBucket: "my-first-firestore-bc.appspot.com",
  messagingSenderId: "856295550753",
  appId: "1:856295550753:web:f79df1de777968086dd860"
};

const app = initializeApp(firebaseConfig);

export default function Login() {
  return (
    <section style={{ padding: '2em' }}>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        >
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 16, offset: 8 }}
        >
          <Button type="primary" htmlType="submit">Login</Button>
        </Form.Item>
      </Form>
    </section>
  )
}