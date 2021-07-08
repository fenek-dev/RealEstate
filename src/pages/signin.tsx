import MainLayout from '../layouts/Main'
import React, {useCallback} from 'react'
import {Form, Input, Button} from 'antd'
import {Typography} from 'antd'
import styles from '../styles/signin.module.scss'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {LOGIN_USER} from '../queries'
import {setCookie} from '../utils/cookie'
import client from '../utils/graphql-client'

const {Title, Text, Link} = Typography

const Signin: React.FC = () => {
  const router = useRouter()
  const onFinish = useCallback(
    async ({email, password}: {email: string; password: string}) => {
      const {data, error} = await client.query({
        query: LOGIN_USER,
        variables: {
          email,
          password,
        },
      })
      if (data) {
        setCookie('token', data.loginUser.token)
        router.replace('profile')
      }
    },
    [],
  )

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
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email',
                message: 'Email incorrect!',
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {required: true, message: 'Please input your password!'},
              {min: 6, message: 'Required at least 6 characters!'},
            ]}>
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
        <Text>Doesn't have an account?</Text>
        <Button className={styles.createBtn}>
          <Link href="/signup">Create an account</Link>
        </Button>
      </section>
    </MainLayout>
  )
}

export default Signin
