import Image from 'next/image'
import {Button} from 'antd'
import {Typography} from 'antd'
import styles from './header.module.scss'
import {memo} from 'react'
const {Link} = Typography

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/logo.svg" width={128} height={22} alt="DigitalEstate" />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link>Buy</Link>
          </li>
          <li>
            <Link>Rent</Link>
          </li>
          <li>
            <Link>Sell</Link>
          </li>
        </ul>
        <Button>
          <Link href="/signin">Sign In</Link>
        </Button>
      </nav>
    </header>
  )
}

export default memo(Header)
