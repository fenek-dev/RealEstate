import {Card, Carousel, Divider, Space} from 'antd'
import {DeleteOutlined} from '@ant-design/icons'
import {ISearchProduct} from '../../types'
import {Typography, Image} from 'antd'
import styles from './searchCard.module.scss'
import {memo} from 'react'
import {useRouter} from 'next/router'
import {useDispatch} from 'react-redux'
import {deleteUserProductAction} from '../../redux/user/userAction'

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
  const dispatch = useDispatch()

  const propertyType =
    property === 'office' || property === 'shop' ? 'commercial' : 'living'

  const onClick = () => {
    router.push(`/product/${propertyType}/${_id}`)
  }

  const onDelete = () => {
    dispatch(deleteUserProductAction({id: _id, type: propertyType}))
  }

  return (
    <Card
      extra={
        router.pathname === '/profile' && (
          <DeleteOutlined onClick={onDelete} style={{cursor: 'pointer'}} />
        )
      }
      cover={
        <Carousel dotPosition="top" lazyLoad="progressive">
          {photos?.map((src, index) => (
            <Image
              style={{cursor: 'pointer', objectFit: 'cover'}}
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
