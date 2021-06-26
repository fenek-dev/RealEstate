import {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addUserAction} from 'src/redux/user/userAction'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {IRootReducer} from '../../redux/rootReducer'
import {logoutUserAction} from '../../redux/user/userAction'
import styles from './main.module.scss'

const MainLayout: React.FC = ({children}) => {
  const dispatch = useDispatch()
  const state = useSelector((store: IRootReducer) => store)

  const onLogout = useCallback(() => {
    dispatch(logoutUserAction())
  }, [])

  useEffect(() => {
    dispatch(addUserAction())
  }, [])
  return (
    <div className={styles.container}>
      <Header user={state.user} onLogout={onLogout} />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
