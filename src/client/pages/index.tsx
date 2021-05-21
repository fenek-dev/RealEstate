import {END} from 'redux-saga'
import {wrapper} from '../redux/store'
import Head from 'next/head'
import MainLayout from '../layouts/Main'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Digital Estate</title>
        <meta
          name="description"
          content="Real Estate website to search your dream property"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </MainLayout>
  )
}

export const getStaticProps = wrapper.getStaticProps(({store}) => {
  store.dispatch(END)
})
