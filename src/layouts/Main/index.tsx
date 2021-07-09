import {useLazyQuery} from '@apollo/client'
import {useRouter} from 'next/router'
import {useCallback, useEffect, useState} from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {TOKEN_USER} from '../../queries'
import {User} from '../../server/user/user.model'
import {getCookie, setCookie} from '../../utils/cookie'
import client from '../../utils/graphql-client'
import styles from './main.module.scss'

const MainLayout: React.FC = ({children}) => {
  const router = useRouter()
  const [getUserFromToken, {data}] = useLazyQuery<{token: User}>(TOKEN_USER)
  const [user, setUser] = useState('')

  const onLogout = useCallback(() => {
    setCookie('token', 'hello')
    router.replace('/')
  }, [])

  useEffect(() => {
    getUserFromToken({
      context: {
        headers: {
          Authorization: `Bearer ${getCookie('token')}`,
        },
      },
    })
  }, [])
  return (
    <div className={styles.container}>
      <Header userName={user} onLogout={onLogout} />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
