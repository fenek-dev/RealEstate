import {Card, Carousel, Divider} from 'antd'
import {ISearchProduct} from '../../types'
import {Typography, Image} from 'antd'
import styles from './searchCard.module.scss'
import {memo} from 'react'

const {Paragraph, Text} = Typography

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
}) => {
  return (
    <Card
      cover={
        <Carousel dotPosition="top" lazyLoad="progressive">
          {photos.map((src, index) => (
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
      <Paragraph className={styles.options}>
        <Text>{area}sq</Text>
        <Text>{beds}bd</Text>
        <Text>{baths}bt</Text>
        <Text>
          {new Date(date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </Text>
      </Paragraph>
    </Card>
  )
}

export default memo(SearchCard)
