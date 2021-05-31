import MainLayout from '../layouts/Main'
import React from 'react'
import {Form, Input, Button} from 'antd'
import {Typography} from 'antd'
import styles from '../styles/signin.module.scss'
import Head from 'next/head'

const {Title, Text, Link} = Typography

const Signin: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  return (
    <MainLayout>
      <Head>
        <title>DigitalEstate | Sign in</title>
      </Head>
      <section className={styles.main}>
        <Title level={2}>Sign in</Title>
        <Form
          className={styles.form}
          name="basic"
          layout="vertical"
          onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{required: true, message: 'Please input your email!'}]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.formButton}>
              Sign in
            </Button>
          </Form.Item>
        </Form>
        <Text>Already have an account?</Text>
        <Button className={styles.createBtn}>
          <Link href="/signin">Create an account</Link>
        </Button>
      </section>
    </MainLayout>
  )
}

export default Signin
