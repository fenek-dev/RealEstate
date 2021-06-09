import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {createUserAction} from 'src/redux/user/userAction'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './main.module.scss'

const MainLayout: React.FC = ({children}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      createUserAction({
        email: 'hello',
        password: 'klshdflk',
        name: 'Maks',
        type: 'buyer',
      }),
    )
  }, [])
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
