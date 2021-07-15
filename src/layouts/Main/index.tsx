import {useLazyQuery} from '@apollo/client'
import {useRouter} from 'next/router'
import {useCallback, useEffect, useState} from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {TOKEN_USER} from '../../utils/queries'
import {User} from '../../server/user/user.model'
import {UserContext} from '../../utils/context'
import {deleteCookie, getCookie, setCookie} from '../../utils/cookie'
import styles from './main.module.scss'
import {notification} from 'antd'

const MainLayout: React.FC = ({children}) => {
  const router = useRouter()
  const [getUserFromToken, {data, error}] =
    useLazyQuery<{token: User}>(TOKEN_USER)
  const [user, setUser] = useState<User>()
  const onLogout = useCallback(() => {
    setCookie('token', 'hello')
    router.replace('/')
  }, [])

  useEffect(() => {
    if (error) {
      console.log(error);
      
      notification.error({
        message: error.name,
        description: error.message,
      })
      deleteCookie('token')
    }
  }, [error])

  useEffect(() => {
    if (data) {
      setUser(data.token)
    }
  }, [data])

  useEffect(() => {
    const token = getCookie('token')
    if (token) {
      getUserFromToken({
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      })
    }
  }, [])
  return (
    <div className={styles.container}>
      <UserContext.Provider value={{user, setUser}}>
        <Header userName={user?.name} onLogout={onLogout} />
        {children}
        <Footer />
      </UserContext.Provider>
    </div>
  )
}

export default MainLayout
