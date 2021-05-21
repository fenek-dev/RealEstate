import Image from 'next/image'
import {Button} from 'antd'
import {Typography} from 'antd'
import styles from './header.module.scss'
import {memo} from 'react'
const {Link} = Typography

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <header className={styles.header}>
      <Image src="/logo.svg" width={128} height={22} alt="DigitalEstate" />
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
        <Button shape="round">Sign up</Button>
      </nav>
    </header>
  )
}

export default memo(Header)
