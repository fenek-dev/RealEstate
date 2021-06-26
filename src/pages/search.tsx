import {useRouter} from 'next/dist/client/router'
import MainLayout from '../layouts/Main'
import Search from '../components/Search'
import {Typography} from 'antd'
import styles from '../styles/search.module.scss'
import Head from 'next/head'
import SearchCard from '../components/SearchCard'
import {IQuery} from '../types'
import {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {IRootReducer} from '../redux/rootReducer'
import {addSearchAction} from '../redux/search/searchAction'

const {Title} = Typography

const SearchPage: React.FC = () => {
  const router = useRouter()
  const state = useSelector((store: IRootReducer) => store)
  const dispatch = useDispatch()

  const products = state.search.products
  const {city, type, property} = router.query

  const handleFinish = useCallback((values: IQuery) => {
    router.push({pathname: 'search', query: {...values}})
  }, [])

  useEffect(() => {
    dispatch(addSearchAction(router.query))
  }, [])
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
        defaultValues={router.query}
        onFinish={handleFinish}
      />
      <Title level={2}>
        {city ? city : 'World'} {property ? property + 's' : ''}{' '}
        {type ? `for ${type}` : ''}
      </Title>
      <section className={styles.result}>
        {products.map((item, index) => (
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
          />
        ))}
      </section>
    </MainLayout>
  )
}

export default SearchPage
