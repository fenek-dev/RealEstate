import Head from 'next/head'
import MainLayout from '../layouts/Main'
import {
  Space,
  Typography,
  Upload,
  Modal,
  Form,
  Input,
  Button,
  Select,
  Radio,
} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {IRootReducer} from '../redux/rootReducer'
import {addProductAction} from '../redux/product/productAction'

const {Title} = Typography

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

const Create: React.FC = () => {
  const store = useSelector((state: IRootReducer) => state)

  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState([])
  const [files, setFiles] = useState([])
  const [error, setError] = useState<{statusCode: number; message: string}>()
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    if (!store.user._id && store.user.loading) {
      router.push('/signup')
    }
  }, [store.user._id, store.user.loading])

  const handleCancel = () => setPreviewVisible(false)

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }

    setPreviewVisible(true)
    setPreviewImage(file.url || file.preview)
  }

  const handleChange = ({fileList}) => {
    setFileList(fileList)
    setFiles([])
    fileList.forEach(file => {
      if (file.status !== 'uploading') {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onloadend = () => {
          setFiles(prev => [...prev, reader.result])
        }
      }
    })
  }

  const onFinish = (values: any) => {
    if (fileList.length < 1) {
      setError({statusCode: 0, message: 'Required at least 1 image'})
    } else {
      dispatch(
        addProductAction({
          ...values,
          photos: files,
          author: store.user._id,
          date: Date.now(),
        }),
      )
    }
  }

  return (
    <MainLayout>
      <Head>
        <title>DigitalEstate | Create a product</title>
      </Head>
      <Title level={1}>Create a product</Title>
      <Title level={2}>Product photo</Title>
      <Upload
        multiple
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        beforeUpload={() => false}
        onChange={handleChange}>
        {fileList.length >= 8 ? null : (
          <div>
            <PlusOutlined />
            <div style={{marginTop: 8}}>Upload</div>
          </div>
        )}
      </Upload>
      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{width: '100%'}} src={previewImage} />
      </Modal>
      <Space direction="vertical" style={{maxWidth: '80vw', minWidth: 350}}>
        <Form name="create" onFinish={onFinish}>
          <Form.Item
            label="City"
            name="city"
            rules={[{required: true, message: 'Please input city name!'}]}>
            <Input allowClear />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{required: true, message: 'Please input address!'}]}>
            <Input allowClear />
          </Form.Item>
          <Form.Item
            label="Type"
            name="type"
            rules={[{required: true, message: 'Please choose the type!'}]}>
            <Radio.Group>
              <Radio.Button value="rent">For rent</Radio.Button>
              <Radio.Button value="buy">For buy</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="property"
            label="Property type"
            rules={[{required: true, message: 'Please input property type!'}]}>
            <Select
              aria-label="property"
              aria-selected="true"
              placeholder="Property type">
              <Select.OptGroup label="Living">
                <Select.Option value="house">House</Select.Option>
                <Select.Option value="apartment">Apartment</Select.Option>
                <Select.Option value="condo">Condo</Select.Option>
              </Select.OptGroup>
              <Select.OptGroup label="Commercial">
                <Select.Option value="office">Office</Select.Option>
                <Select.Option value="shop">Shop</Select.Option>
              </Select.OptGroup>
            </Select>
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea allowClear />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{required: true, message: 'Please input price!'}]}>
            <Input allowClear type="number" />
          </Form.Item>

          <Form.Item
            label="Area"
            name="area"
            rules={[{required: true, message: 'Please input area!'}]}>
            <Input allowClear type="number" />
          </Form.Item>

          <Form.Item
            label="Bedrooms"
            name="beds"
            rules={[{required: true, message: 'Please input beds!'}]}>
            <Input allowClear type="number" />
          </Form.Item>

          <Form.Item
            label="Bathrooms"
            name="baths"
            rules={[{required: true, message: 'Please input baths!'}]}>
            <Input allowClear type="number" />
          </Form.Item>

          <Form.Item label="Tax" name="tax">
            <Input allowClear type="number" />
          </Form.Item>

          <Form.Item name="region" label="Region">
            <Select
              showSearch
              aria-label="region"
              aria-selected="true"
              placeholder="Region name">
              <Select.Option value="moscow">Moscow</Select.Option>
              <Select.Option value="newYork">New York</Select.Option>
              <Select.Option value="toronto">Toronto</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="layout" label="Layout">
            <Select
              showSearch
              aria-label="layout"
              aria-selected="true"
              placeholder="Layout name">
              <Select.Option value="ac1">AC-1</Select.Option>
              <Select.Option value="ac2">AC-2</Select.Option>
              <Select.Option value="a74">A-74</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="category" label="Building">
            <Select
              showSearch
              aria-label="building"
              aria-selected="true"
              placeholder="Building name">
              <Select.Option value="ac1">AC-1</Select.Option>
              <Select.Option value="ac2">AC-2</Select.Option>
              <Select.Option value="a74">A-74</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{width: 150}}>
              Create
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </MainLayout>
  )
}

export default Create
