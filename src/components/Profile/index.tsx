import {Form, Input, Typography, Space, Upload, message, Button} from 'antd'
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons'
import {UploadChangeParam} from 'antd/lib/upload'
import {UploadFile} from 'antd/lib/upload/interface'
import {useForm} from 'antd/lib/form/Form'
import {memo} from 'react'
import {UserInitialStateInterface} from '../../redux/user/userReducer'

const {Title} = Typography

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

interface IProfile {
  handleChange: (info: UploadChangeParam<UploadFile<any>>) => void
  imageUrl: string
  loading: boolean
  onFinish: (values: any) => void
  user: UserInitialStateInterface
}
const Profile: React.FC<IProfile> = ({
  handleChange,
  imageUrl,
  loading,
  onFinish,
  user,
}) => {
  const [form] = useForm()
  return (
    <Space align="start" size="large">
      <Space direction="vertical" align="center">
        <Title level={2}>Profile photo</Title>
        <Upload
          supportServerRender
          name="avatar"
          listType="picture-card"
          showUploadList={false}
          beforeUpload={beforeUpload}
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
}

export default memo(Profile)
