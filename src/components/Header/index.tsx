import Image from 'next/image'
import {Button, Typography, Avatar, Menu, Dropdown, Space} from 'antd'
import styles from './header.module.scss'
import {memo} from 'react'
import {useSelector} from 'react-redux'
import {IRootReducer} from '../../redux/rootReducer'
import {UserOutlined} from '@ant-design/icons'

const {Link} = Typography

const Header: React.FC = () => {
  const user = useSelector((store: IRootReducer) => store.user)
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/logo.svg" width={128} height={22} alt="DigitalEstate" />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link strong href="/search?type=buy">
              Buy
            </Link>
          </li>
          <li>
            <Link strong href="/search?type=rent">
              Rent
            </Link>
          </li>
          <li>
            <Link strong href="/create">
              Sell
            </Link>
          </li>
        </ul>
        {user.email ? (
          <Space>
            <Avatar icon={<UserOutlined />} />
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="1">
                    <Link href="/profile">My profile</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link href="/">Products</Link>
                  </Menu.Item>
                  <Menu.Item danger key="3">
                    <Link href="/">Logout</Link>
                  </Menu.Item>
                </Menu>
              }>
              <Link onClick={e => e.preventDefault()}>{user.name}</Link>
            </Dropdown>
          </Space>
        ) : (
          <Button>
            <Link href="/signin">Sign In</Link>
          </Button>
        )}
      </nav>
    </header>
  )
}

export default memo(Header)
