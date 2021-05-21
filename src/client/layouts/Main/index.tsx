import Header from '../../components/Header'
import styles from './main.module.scss'

const MainLayout: React.FC = ({children}) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  )
}

export default MainLayout
