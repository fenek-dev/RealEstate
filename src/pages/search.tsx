import {useRouter} from 'next/dist/client/router'
import MainLayout from '../layouts/Main'
import Search from '../components/Search'
import {Typography} from 'antd'
import styles from '../styles/search.module.scss'
import Head from 'next/head'
import SearchCard from '../components/SearchCard'
import {wrapper} from '../redux/store'
import {END} from 'redux-saga'
import {addSearchAction} from '../redux/search/searchAction'
import {IQuery, ISearchState} from '../types'

const {Title} = Typography

interface ISearchPage extends ISearchState {
  query: IQuery
}

const SearchPage: React.FC<ISearchPage> = ({products, query}) => {
  const router = useRouter()

  const {city, type, property} = router.query
  return (
    <MainLayout>
      <Head>
        <title>
          DigitalEstate | {city ? city : ''} {property ? property : ''}s{' '}
          {type ? `for ${type}` : ''}
        </title>
      </Head>
      <Search className={styles.search} type="main" defaultValues={query} />
      <Title level={2}>
        {city ? city : ''} {property ? property : ''}s{' '}
        {type ? `for ${type}` : ''}
      </Title>
      <section className={styles.result}>
        {products.map(item => (
          <SearchCard
            key={item.date}
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

export const getServerSideProps = wrapper.getServerSideProps(
  async ({store, query}) => {
    store.dispatch(addSearchAction())
    store.dispatch(END)
    const state = store.getState().search

    return {
      props: {
        products: state.products || [],
        query,
      },
    }
  },
)
