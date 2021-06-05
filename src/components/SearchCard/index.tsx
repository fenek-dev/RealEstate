import {Card, Carousel, Divider} from 'antd'
import {ISearchProduct} from '../../types'
import {Typography, Image} from 'antd'
import styles from './searchCard.module.scss'

const {Paragraph, Text} = Typography

const SearchCard: React.FC<ISearchProduct> = ({
  address,
  area,
  city,
  date,
  price,
  baths,
  beds,
  //   photos,
  property,
  type,
}) => {
  const photos = [
    'https://wallpapershome.ru/images/wallpapers/dom-3840x2160-osobnyak-basseyn-modern-interer-hay-tek-dvor-4407.jpg',
    'https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg',
    'https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607',
  ]
  return (
    <Card
      style={{width: 300}}
      cover={
        <Carousel dotPosition="top" adaptiveHeight>
          {photos.map((src, index) => (
            <Image
              preview={false}
              src={src}
              height={150}
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
        avatar={
          <Text strong className={styles.price}>
            ${price}
          </Text>
        }
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

export default SearchCard
