import {useContext, useEffect, useState} from 'react'
import Head from 'next/head'
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
  notification,
} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import {useMutation} from '@apollo/client'

import {Product} from '../server/product/product.model'
import {CREATE_PRODUCT} from '../utils/queries'
import {UserContext} from '../utils/context'
import {getCookie} from '../utils/cookie'
import {getBase64} from '../utils/file'

const {Title} = Typography

const Create: React.FC = () => {
  const [createProduct, {data, error}] = useMutation<{
    createProduct: Product
  }>(CREATE_PRODUCT)
  const {user} = useContext(UserContext)
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState([])
  const [files, setFiles] = useState([])

  useEffect(() => {
    if (error) {
      notification.error({
        message: error.name,
        description: error.message,
      })
    }
  }, [error])

  useEffect(() => {
    if (data) {
      notification.success({
        message: 'Product successfully created',
        duration: 10,
      })
    }
  }, [data])

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
      // setError({statusCode: 0, message: 'Required at least 1 image'})
    } else {
      const input = {
        ...values,
        area: +values.area,
        beds: +values.beds,
        baths: +values.baths,
        price: +values.price,
        photos: files,
        author: user?._id,
      }
      createProduct({
        variables: {
          input,
        },
        context: {
          headers: {
            Authorization: `Bearer ${getCookie('token')}`,
          },
        },
      })
    }
  }

  return (
    <>
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
              allowClear
              showSearch
              aria-label="region"
              aria-selected="true"
              placeholder="Region name">
              <Select.Option value="60d6dd40ecd5268a328f377f">
                Moscow
              </Select.Option>
              <Select.Option value="60e01aefb6703860e824dab2">
                New York
              </Select.Option>
              <Select.Option value="60e01a89b6703860e824dab1">
                Ontario
              </Select.Option>
              <Select.Option value="60e01c38b6703860e824dab7">
                British Columbia
              </Select.Option>
              <Select.Option value="60e01be0b6703860e824dab6">
                Alberta
              </Select.Option>
              <Select.Option value="60e01b46b6703860e824dab3">
                Nova Scotia
              </Select.Option>
              <Select.Option value="60e01b75b6703860e824dab4">
                Quebec
              </Select.Option>
              <Select.Option value="60e01b9bb6703860e824dab5">
                Saskatchewan
              </Select.Option>
              <Select.Option value="60e01c6cb6703860e824dab8">
                New Brunswick
              </Select.Option>
              <Select.Option value="60e01d30b6703860e824dab9">
                Newfoundland and Labrador
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="layout" label="Layout">
            <Select
              allowClear
              showSearch
              aria-label="layout"
              aria-selected="true"
              placeholder="Layout name">
              <Select.Option value="60a6330b3462902a9c2a04cd">
                T22
              </Select.Option>
              <Select.Option value="60e0359956993d63d3cba224">
                4M421
              </Select.Option>
              <Select.Option value="60e035ab56993d63d3cba225">
                4M750
              </Select.Option>
              <Select.Option value="60e035c856993d63d3cba226">
                2M342
              </Select.Option>
              <Select.Option value="60e0360c56993d63d3cba227">
                3M222
              </Select.Option>
              <Select.Option value="60e0363756993d63d3cba228">
                3M5122
              </Select.Option>
              <Select.Option value="60e0366956993d63d3cba229">
                5C22
              </Select.Option>
              <Select.Option value="60e0367656993d63d3cba22a">
                1B111
              </Select.Option>
              <Select.Option value="60e036bf56993d63d3cba22b">
                3WC311
              </Select.Option>
              <Select.Option value="60e036cd56993d63d3cba22c">
                A11
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="category" label="Building">
            <Select
              allowClear
              showSearch
              aria-label="building"
              aria-selected="true"
              placeholder="Building name">
              <Select.Option value="60a61885c8a60e39b013aa71">A1</Select.Option>
              <Select.Option value="60a61f12338ddd11f4f07cd9">A2</Select.Option>
              <Select.Option value="60e03e2e56993d63d3cba22d">A3</Select.Option>
              <Select.Option value="60e03e3456993d63d3cba22e">A4</Select.Option>
              <Select.Option value="60e03e4556993d63d3cba22f">
                Gallery
              </Select.Option>
              <Select.Option value="60e03e4e56993d63d3cba230">
                World
              </Select.Option>
              <Select.Option value="60e03e5a56993d63d3cba231">
                Halifax
              </Select.Option>
              <Select.Option value="60e03e7756993d63d3cba232">
                GUM
              </Select.Option>
              <Select.Option value="60e03e9656993d63d3cba233">
                Metropolis
              </Select.Option>
              <Select.Option value="60e03ea856993d63d3cba234">
                ANeapolis
              </Select.Option>
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
    </>
  )
}

export default Create
