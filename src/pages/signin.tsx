import MainLayout from '../layouts/Main'
import React, {useCallback, useEffect} from 'react'
import {Form, Input, Button} from 'antd'
import {Typography} from 'antd'
import styles from '../styles/signin.module.scss'
import Head from 'next/head'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import {loginUserAction} from '../redux/user/userAction'
import {IRootReducer} from '../redux/rootReducer'

const {Title, Text, Link} = Typography

const Signin: React.FC = () => {
  const state = useSelector((store: IRootReducer) => store.user)
  const dispatch = useDispatch()
  const router = useRouter()
  const onFinish = useCallback((values: any) => {
    dispatch(loginUserAction(values))
  }, [])

  useEffect(() => {
    if (state._id) {
      router.replace('profile')
    }
  }, [state])

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
