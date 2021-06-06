import {END} from 'redux-saga'
import {wrapper} from '../redux/store'
import Head from 'next/head'
import MainLayout from '../layouts/Main'
import {Typography} from 'antd'
import Image from 'next/image'
import styles from '../styles/index.module.scss'
import Search from '../components/Search'
const {Title, Text} = Typography
export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>DigitalEstate</title>
        <meta
          name="description"
          content="Real Estate website to search your dream property"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Digital Estate" />
        <meta
          property="og:description"
          content="Real Estate website to search your dream property"
        />
        {/* <meta property="og:image" content={} />
        <meta
          property="og:image:alt"
          content={city + ' ' + address + ' for ' + type}
        /> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="http://localhost:3000/" />
        <link rel="canonical" href="http://localhost:3000/" />
      </Head>
      <section className={styles.welcome}>
        <div className={styles.welcomeTitle}>
          <Text>Digital Estate is</Text>
          <Title level={1}>The real estate marketplace</Title>
          <Title level={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Title>
        </div>
        <div style={{width: '100%'}}>
          <Image
            loading="lazy"
            src="/welcome.jpg"
            width="100%"
            height="50%"
            layout="responsive"
            alt="Digital Estate"
          />
        </div>

        <Search className={styles.search} type="welcome" />
      </section>
    </MainLayout>
  )
}

export const getStaticProps = wrapper.getStaticProps(({store}) => {
  store.dispatch(END)
})
