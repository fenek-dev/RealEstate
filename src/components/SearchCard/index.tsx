import React, {memo, useCallback} from 'react'
import {Card, Carousel, Divider, Space, Typography, Image} from 'antd'
import {DeleteOutlined} from '@ant-design/icons'
import {useRouter} from 'next/router'

import {ISearchProduct} from '../../types'
import Bath from '../../assets/product/bath.svg'
import Bed from '../../assets/product/bed.svg'
import Sqrt from '../../assets/product/sqft.svg'

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
        hoverable
        className={styles.card}
        onClick={onClick}
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
                loading="lazy"
                preview={false}
                src={src}
                height={200}
                key={index}
                alt={`${type} ${index}`}
              />
            ))}
          </Carousel>
        }>
        <Card.Meta
          title={city}
          description={address}
          avatar={
            <Text className={styles.price} strong>
              ${price.toLocaleString('en-US')}
            </Text>
          }
          style={{position: 'relative'}}></Card.Meta>

        <Divider />
        <Space direction="horizontal" className={styles.options}>
          {area && (
            <Text>
              <img src={Sqrt} alt="type" className={styles.icons} />
              {area} sq
            </Text>
          )}
          {beds && (
            <Text>
              <img src={Bed} alt="type" className={styles.icons} />
              {beds} bd
            </Text>
          )}
          {baths && (
            <Text>
              <img src={Bath} alt="type" className={styles.icons} />
              {baths} bt
            </Text>
          )}
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
