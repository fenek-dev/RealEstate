import {useRouter} from 'next/dist/client/router'
import MainLayout from '../layouts/Main'
import Search from '../components/Search'
import {Empty, Typography} from 'antd'
import styles from '../styles/search.module.scss'
import Head from 'next/head'
import SearchCard from '../components/SearchCard'
import {IQuery, ISearchProduct} from '../types'
import {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {IRootReducer} from '../redux/rootReducer'
import {addSearchAction} from '../redux/search/searchAction'
import {wrapper} from '../redux/store'
import {END} from 'redux-saga'

const {Title, Paragraph} = Typography

interface ISearchPage {
  query: IQuery
}

const SearchPage: React.FC<ISearchPage> = ({query}) => {
  const router = useRouter()
  const state = useSelector((store: IRootReducer) => store)
  const dispatch = useDispatch()
  const [products, setProducts] = useState<ISearchProduct[]>([])

  const {city, type, property} = query

  const handleFinish = useCallback((values: IQuery) => {
    router.push({pathname: 'search', query: {...values}})
  }, [])

  useEffect(() => {
    dispatch(addSearchAction(router.query))
  }, [router.query])

  useEffect(() => {
    setProducts(state.search.products)
  }, [state.search])
  return (
    <MainLayout>
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
    </MainLayout>
  )
}

export default SearchPage

export const getServerSideProps = wrapper.getServerSideProps(
  async ({store, query}) => {
    store.dispatch(END)

    return {
      props: {
        query,
      },
    }
  },
)
