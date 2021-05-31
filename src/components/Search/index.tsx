import React, {memo} from 'react'
import {Form, Input, Button, Select} from 'antd'
import {SearchOutlined} from '@ant-design/icons'
import styles from './search.module.scss'

interface ISearch {
  className?: string
  onFinish?: () => void
}

const Search: React.FC<ISearch> = ({className, onFinish}) => {
  const [form] = Form.useForm()

  return (
    <Form
      className={className}
      form={form}
      name="search"
      layout="inline"
      onFinish={onFinish}>
      <Form.Item
        name="city"
        rules={[
          {
            required: true,
            message: 'Please input city name',
          },
        ]}>
        <Input prefix={<SearchOutlined />} placeholder="City" />
      </Form.Item>
      <Form.Item name="Property">
        <Select style={{width: 150}} placeholder="Property type">
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
      <Form.Item name="type">
        <Select style={{width: 100}} placeholder="Rent/Buy">
          <Select.Option value="Rent">Rent</Select.Option>
          <Select.Option value="Buy">Buy</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({errors}) => errors.length).length
            }>
            Start Search
          </Button>
        )}
      </Form.Item>
    </Form>
  )
}

export default memo(Search)
