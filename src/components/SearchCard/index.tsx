import {Card, Carousel, Divider, Space} from 'antd'
import {ISearchProduct} from '../../types'
import {Typography, Image} from 'antd'
import styles from './searchCard.module.scss'
import {memo} from 'react'
import {useRouter} from 'next/router'

const {Text} = Typography

const SearchCard: React.FC<ISearchProduct> = ({
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
  property,
}) => {
  const router = useRouter()
  const onClick = () => {
    const propertyType =
      property === 'office' || property === 'shop' ? 'commercial' : 'living'
    router.push(`/product/${propertyType}/${_id}`)
  }
  return (
    <Card
      style={{cursor: 'pointer'}}
      onClick={onClick}
      cover={
        <Carousel dotPosition="top" lazyLoad="progressive">
          {photos?.map((src, index) => (
            <Image
              loading="lazy"
              preview={false}
              src={src}
              height={200}
              style={{objectFit: 'cover'}}
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
        {area && <Text>{area}sq</Text>}
        {beds && <Text>{beds}bd</Text>}
        {baths && <Text>{baths}bt</Text>}
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
}

export default memo(SearchCard)
