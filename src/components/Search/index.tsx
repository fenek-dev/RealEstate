import React, {memo} from 'react'
import {Form, Input, Button, Select} from 'antd'
import {SearchOutlined} from '@ant-design/icons'
import styles from './search.module.scss'
import {IQuery} from '../../types'

interface ISearch {
  className?: string
  onFinish?: (values: IQuery) => void
  defaultValues?: IQuery
  type: 'welcome' | 'main'
}

export const Search: React.FC<ISearch> = memo(({
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
      initialValues={defaultValues}
      layout="inline"
      onFinish={onFinish}>
      <Form.Item
        name="city"
        rules={[
          {
            required: true,
            message: 'Please input city name',
          },
          {
            type: 'string',
            message: 'It should be a string',
          },
        ]}>
        <Input
          aria-label="city"
          style={{width: 150}}
          prefix={<SearchOutlined />}
          placeholder="City"
        />
      </Form.Item>
      <Form.Item
        name="property"
        rules={[
          {
            required: true,
            message: 'Please input property type',
          },
        ]}>
        <Select
          aria-label="property"
          aria-selected="true"
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
        <Select aria-label="type" aria-selected="true" placeholder="Rent/Buy">
          <Select.Option value="rent">Rent</Select.Option>
          <Select.Option value="buy">Buy</Select.Option>
        </Select>
      </Form.Item>
      {type === 'main' && (
        <>
          <Form.Item name="beds">
            <Input aria-label="beds" style={{width: 70}} placeholder="Beds" />
          </Form.Item>
          <Form.Item name="baths">
            <Input aria-label="baths" style={{width: 70}} placeholder="Baths" />
          </Form.Item>
          <Form.Item name="min">
            <Input
              aria-label="min price"
              style={{width: 100}}
              placeholder="Min price"
            />
          </Form.Item>
          <Form.Item name="max">
            <Input
              aria-label="max price"
              style={{width: 100}}
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
})
