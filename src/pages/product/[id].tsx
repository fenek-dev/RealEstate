import React from 'react'
import {Carousel, Typography, Card, Image, Divider, Button, Alert} from 'antd'
import {HomeOutlined, ExpandOutlined} from '@ant-design/icons'
import {GetServerSidePropsContext} from 'next'
import Head from 'next/head'
import {ApolloError} from '@apollo/client'

import {IProduct} from '../../types'
import client from '../../utils/graphql-client'
import {GET_PRODUCT} from '../../utils/queries'
import {Product} from '../../server/product/product.model'

import styles from './product.module.scss'

const {Title, Paragraph, Text} = Typography

interface ProductPageInterface extends Partial<IProduct> {
  errors?: ApolloError[]
}

const ProductPage: React.FC<ProductPageInterface> = ({
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
  errors,
}) => {
  return (
    <>
      {!errors ? (
        <>
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
          <Carousel
            adaptiveHeight
            centerMode
            // autoplay
            className={styles.carousel}
            infinite={false}
            autoplaySpeed={5000}
            dotPosition="top">
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
                  <Text strong>{type.toUpperCase()}</Text>
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
              {region && (
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
              )}

              {layout && (
                <Card title="Layout" className={styles.card}>
                  <Carousel autoplay autoplaySpeed={5000}>
                    {layout.photos.map((src, index) => (
                      <Image
                        src={src}
                        key={index}
                        alt={layout.name + 'plan'}
                        loading="lazy"
                      />
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
              )}
              {category && (
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
              )}
            </main>
            <aside>
              <Card className={styles.card}>
                <Paragraph>Total price:</Paragraph>
                <Title level={2}>{price} $</Title>
                <Button type="primary">Contact</Button>
                <Divider />
                <Paragraph>
                  {new Date(date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </Paragraph>
              </Card>
            </aside>
          </section>
        </>
      ) : (
        <>
          {errors.map(item => (
            <Alert
              message={item.name}
              description={item.message}
              type="error"
            />
          ))}
        </>
      )}
    </>
  )
}

export default ProductPage

export async function getServerSideProps({params}: GetServerSidePropsContext) {
  try {
    const {data} = await client.query<{getProductById: Product}>({
      query: GET_PRODUCT,
      variables: {id: params.id},
    })

    return {
      props: {...data.getProductById},
    }
  } catch (error) {
    if (
      error?.graphQLErrors.find(item => item.message === 'Product nor found')
    ) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        errors: error?.networkError?.result?.errors || [],
      },
    }
  }
}
