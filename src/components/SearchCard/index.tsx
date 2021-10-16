import React, {memo, useCallback} from 'react'
import {Card, Carousel, Divider, Space, Typography, Image} from 'antd'
import {DeleteOutlined} from '@ant-design/icons'
import {useRouter} from 'next/router'

import {ISearchProduct} from '../../types'

import styles from './searchCard.module.scss'

const {Text} = Typography

export const SearchCard: React.FC<ISearchProduct> = memo(
  ({
    address,
    area,
    city,
    date,
    price,
    baths,
    beds,
    photos,
    type,
    _id,
    onDelete,
  }) => {
    const router = useRouter()

    const onClick = useCallback(() => {
      router.push(`/product/${_id}`)
    }, [_id])

    const handleClick = useCallback(() => {
      onDelete(_id)
    }, [_id])

    return (
      <Card
        extra={
          router.pathname === '/profile' && (
            <DeleteOutlined
              role="button"
              onClick={handleClick}
              style={{cursor: 'pointer'}}
            />
          )
        }
        cover={
          <Carousel dotPosition="top" lazyLoad="progressive">
            {photos?.map((src, index) => (
              <Image
                className={styles.image}
                onClick={onClick}
                loading="lazy"
                preview={false}
                src={src}
                height={200}
                key={index}
                alt={type + ' ' + index}
              />
            ))}
          </Carousel>
        }>
        <Card.Meta
          title={city}
          description={address}
          avatar={<div className={styles.price}>${price}</div>}
          style={{position: 'relative'}}></Card.Meta>

        <Divider />
        <Space direction="horizontal" className={styles.options}>
          {area && <Text>{area} sq</Text>}
          {beds && <Text>{beds} bd</Text>}
          {baths && <Text>{baths} bt</Text>}
          <Text>
            {new Date(date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </Text>
        </Space>
      </Card>
    )
  },
)
