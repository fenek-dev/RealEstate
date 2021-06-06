import React from 'react'
import {Carousel, Typography, Card, Image, Divider, Button} from 'antd'
import {HomeOutlined, ExpandOutlined} from '@ant-design/icons'
import {wrapper} from '../../redux/store'
import {END} from 'redux-saga'
import {addProductAction} from '../../redux/product/productAction'
import MainLayout from '../../layouts/Main'
import Head from 'next/head'
import styles from './product.module.scss'
import {IProduct} from '../../types'
import {GetStaticPaths} from 'next'
import {useRouter} from 'next/router'
const {Title, Paragraph, Text} = Typography

const Product: React.FC<IProduct> = ({
  address,
  area,
  author,
  layout,
  photos,
  property,
  tax,
  type,
  city,
  category,
  beds,
  baths,
  region,
  price,
  description,
  date,
}) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <MainLayout>
      <Head>
        <title>DigitalEstate | {address}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={address} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={photos[0]} />
        <meta
          property="og:image:alt"
          content={city + ' ' + address + ' for ' + type}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Carousel autoplay className={styles.carousel} centerMode>
        {photos.map((src, index) => (
          <Image
            src={src}
            key={index}
            className={styles.carousel__image}
            alt={'photo of house ' + index}
          />
        ))}
      </Carousel>
      <section className={styles.page}>
        <main className={styles.main}>
          <Title level={3} className={styles.main__address}>
            {address}
          </Title>
          <div className={styles.mainIcons}>
            <div className={styles.mainIcons__item}>
              <HomeOutlined />
              <Text strong>{type}</Text>
              <Text>Type</Text>
            </div>
            <div className={styles.mainIcons__item}>
              <ExpandOutlined />
              <Text strong>{area} </Text>
              <Text>Sq. m</Text>
            </div>
            <div className={styles.mainIcons__item}>
              <HomeOutlined />
              <Text strong>{beds} </Text>
              <Text>Beds</Text>
            </div>
            <div className={styles.mainIcons__item}>
              <HomeOutlined />
              <Text strong>{baths} </Text>
              <Text>Baths</Text>
            </div>
          </div>
          <Paragraph className={styles.main__desc}>{description}</Paragraph>
          <Card title="Features" className={styles.card}>
            <Paragraph>
              <Text strong>Property type: </Text>
              {property}
            </Paragraph>
            <Paragraph>
              <Text strong>City: </Text>
              {city}
            </Paragraph>
            {!!tax && (
              <Paragraph>
                <Text strong>Tax value: </Text>
                {tax}
              </Paragraph>
            )}
          </Card>
          <Card title="Location" className={styles.card}>
            <Paragraph>
              <Text strong>Name: </Text>
              {region.name}
            </Paragraph>
            <Paragraph>
              <Text strong>Population: </Text>
              {region.population}
            </Paragraph>
            <Paragraph>
              <Text strong>Average cost: </Text>
              {region.averageCost}
            </Paragraph>
            <Paragraph>
              <Text strong>Shop centers: </Text>
              {region.shopCenters}
            </Paragraph>
            <Paragraph>
              <Text strong>Hospitals: </Text>
              {region.hospitals}
            </Paragraph>
            <Paragraph>
              <Text strong>Parks: </Text>
              {region.parks}
            </Paragraph>
          </Card>
          <Card title="Layout" className={styles.card}>
            <Carousel autoplay>
              {layout.photos.map((src, index) => (
                <Image src={src} key={index} alt={layout.name + 'plan'} />
              ))}
            </Carousel>
            <Paragraph>
              <Text strong>Layout name: </Text>
              {layout.name}
            </Paragraph>
            <Paragraph>
              <Text strong>Rooms: </Text>
              {layout.rooms}
            </Paragraph>
            <Paragraph>
              <Text strong>Max area: </Text>
              {layout.maxArea}
            </Paragraph>
            <Paragraph>
              <Text strong>Min area: </Text>
              {layout.minArea}
            </Paragraph>
          </Card>
          <Card title="Building" className={styles.card}>
            <Paragraph>
              <Text strong>Name: </Text>
              {category.name}
            </Paragraph>
            <Paragraph>
              <Text strong>Build year: </Text>
              {category.year}
            </Paragraph>
            <Paragraph>
              <Text strong>Type: </Text>
              {category.type}
            </Paragraph>
            {category.class && (
              <Paragraph>
                <Text strong>Class: </Text>
                {category.class}
              </Paragraph>
            )}
            {category.area && (
              <Paragraph>
                <Text strong>Total area: </Text>
                {category.class}
              </Paragraph>
            )}
            {category.floors && (
              <Paragraph>
                <Text strong>Floors: </Text>
                {category.floors}
              </Paragraph>
            )}
            {category.parking && (
              <Paragraph>
                <Text strong>Parking slots: </Text>
                {category.parking}
              </Paragraph>
            )}
          </Card>
        </main>
        <aside>
          <Card className={styles.card}>
            <Paragraph>Total price:</Paragraph>
            <Title level={2}>{price}</Title>
            <Button type="primary">Contact</Button>
            <Divider />
            <Paragraph>{date}</Paragraph>
          </Card>
        </aside>
      </section>
    </MainLayout>
  )
}

export default Product

export const getStaticPaths: GetStaticPaths = async () => {
  return {paths: [{params: {id: '123'}}], fallback: true}
}

export const getStaticProps = wrapper.getStaticProps(({store}) => {
  store.dispatch(addProductAction())
  store.dispatch(END)

  return {
    props: store.getState().product,
  }
})
