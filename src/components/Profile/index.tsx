import React, {memo} from 'react'
import {Form, Input, Typography, Space, Upload, message, Button} from 'antd'
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons'
import {UploadFile, UploadChangeParam} from 'antd/lib/upload/interface'
import {useForm} from 'antd/lib/form/Form'

import {User} from '../../server/user/user.model'
import {beforeFileUpload} from '../../utils/file'

const {Title} = Typography

interface IProfile {
  handleChange: (info: UploadChangeParam<UploadFile<any>>) => void
  imageUrl: string
  loading: boolean
  onFinish: (values: any) => void
  onUpload: (file: any) => void
  user: Partial<User>
}

export const Profile: React.FC<IProfile> = memo(
  ({handleChange, imageUrl, loading, onFinish, user, onUpload}) => {
    const [form] = useForm()
    return (
      <Space align="start" size="large">
        <Space direction="vertical" align="center">
          <Title level={2}>Profile photo</Title>
          <Upload
            supportServerRender
            name="avatar"
            listType="picture-card"
            customRequest={onUpload}
            showUploadList={false}
            beforeUpload={beforeFileUpload}
            onChange={handleChange}>
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{width: '100%'}} />
            ) : (
              <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{marginTop: 8}}>Upload</div>
              </div>
            )}
          </Upload>
        </Space>
        <Space direction="vertical">
          <Title level={2}>Profile details</Title>
          <Form
            form={form}
            name="profile"
            onFinish={onFinish}
            initialValues={user}>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
                {
                  min: 5,
                  message: 'Name should be more than 5 characters',
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button style={{width: 150}} type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Space>
    )
  },
)
