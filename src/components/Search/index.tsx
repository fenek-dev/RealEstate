import React, {memo} from 'react'
import {Form, Input, Button, Select} from 'antd'
import {SearchOutlined} from '@ant-design/icons'
import styles from './search.module.scss'
import {IQuery} from '../../types'

interface ISearch {
  className?: string
  onFinish?: () => void
  defaultValues?: IQuery
  type: 'welcome' | 'main'
}

const Search: React.FC<ISearch> = ({
  className,
  onFinish,
  defaultValues,
  type,
}) => {
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
        required
        rules={[
          {
            required: true,
            message: 'Please input city name',
          },
        ]}>
        <Input
          style={{width: 150}}
          defaultValue={defaultValues && defaultValues.city}
          prefix={<SearchOutlined />}
          placeholder="City"
        />
      </Form.Item>
      <Form.Item name="property">
        <Select
          defaultValue={defaultValues && defaultValues.property}
          style={{width: 150}}
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
      <Form.Item name="type">
        <Select
          defaultValue={defaultValues && defaultValues.type}
          style={{width: 100}}
          placeholder="Rent/Buy">
          <Select.Option value="rent">Rent</Select.Option>
          <Select.Option value="buy">Buy</Select.Option>
        </Select>
      </Form.Item>
      {type === 'main' && (
        <>
          <Form.Item name="beds">
            <Input
              style={{width: 70}}
              defaultValue={defaultValues && defaultValues.beds}
              placeholder="Beds"
            />
          </Form.Item>
          <Form.Item name="baths">
            <Input
              style={{width: 70}}
              defaultValue={defaultValues && defaultValues.baths}
              placeholder="Baths"
            />
          </Form.Item>
          <Form.Item name="min">
            <Input
              style={{width: 100}}
              defaultValue={defaultValues && defaultValues.min}
              placeholder="Min price"
            />
          </Form.Item>
          <Form.Item name="max">
            <Input
              style={{width: 100}}
              defaultValue={defaultValues && defaultValues.max}
              placeholder="Max price"
            />
          </Form.Item>
        </>
      )}

      <Form.Item shouldUpdate>
        {() => (
          <Button type="primary" htmlType="submit">
            Start Search
          </Button>
        )}
      </Form.Item>
    </Form>
  )
}

export default memo(Search)
