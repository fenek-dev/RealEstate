import {useRouter} from 'next/dist/client/router'
import Search from '../components/Search'
import {Empty, notification, Typography} from 'antd'
import styles from '../styles/search.module.scss'
import Head from 'next/head'
import SearchCard from '../components/SearchCard'
import {IQuery, ISearchProduct} from '../types'
import {useCallback, useEffect} from 'react'
import {GetServerSidePropsContext} from 'next'
import client from '../utils/graphql-client'
import {SEARCH_PRODUCT} from '../utils/queries'
import {ApolloError} from '@apollo/client'

const {Title, Paragraph} = Typography

interface ISearchPage {
  query: IQuery
  products: ISearchProduct[]
  errors?: ApolloError[]
}

const SearchPage: React.FC<ISearchPage> = ({query, products, errors}) => {
  const router = useRouter()
  const {city, type, property} = query

  useEffect(() => {
    if (errors) {
      errors.forEach(error => {
        notification.error({
          message: error.name,
          description: error.message,
        })
      })
    }
  }, [errors])

  const handleFinish = useCallback((values: IQuery) => {
    const nonNullQuery = {}
    for (const key in values) {
      if (values[key]) {
        nonNullQuery[key] = isNaN(Number(values[key]))
          ? values[key]
          : Number(values[key])
      } else {
        nonNullQuery[key] = null
      }
    }
    console.log(nonNullQuery)

    router.push({pathname: 'search', query: {...nonNullQuery}})
  }, [])

  return (
    <>
      <Head>
        <title>
          DigitalEstate | {city ? city : 'World'}{' '}
          {property ? property + 's' : ''} {type ? `for ${type}` : ''}
        </title>
      </Head>
      <Search
        className={styles.search}
        type="main"
        defaultValues={query}
        onFinish={handleFinish}
      />
      <Title level={2}>
        {city ? city : 'World'} {property ? property + 's' : ''}{' '}
        {type ? `for ${type}` : ''}
      </Title>
      <Paragraph>
        Found {products.length} object{products.length === 1 ? '' : 's'}
      </Paragraph>
      <section className={styles.result}>
        {products.length > 0 ? (
          products.map((item, index) => (
            <SearchCard
              key={item._id || index}
              _id={item._id}
              address={item.address}
              photos={item.photos}
              area={item.area}
              baths={item.baths}
              beds={item.beds}
              city={item.city}
              price={item.price}
              date={item.date}
              property={item.property}
            />
          ))
        ) : (
          <Empty />
        )}
      </section>
    </>
  )
}

export default SearchPage

export async function getServerSideProps({query}: GetServerSidePropsContext) {
  const nonNullQuery = {}
  for (const key in query) {
    if (query[key]) {
      nonNullQuery[key] = isNaN(Number(query[key]))
        ? query[key]
        : Number(query[key])
    } else {
      nonNullQuery[key] = null
    }
  }
  try {
    const {data} = await client.query<{searchProduct: ISearchProduct[]}>({
      query: SEARCH_PRODUCT,
      variables: {input: nonNullQuery},
    })
    return {
      props: {
        query,
        products: data.searchProduct,
      },
    }
  } catch (error) {
    return {
      props: {
        query,
        products: [],
        errors: error?.networkError?.result?.errors || [],
      },
    }
  }
}
