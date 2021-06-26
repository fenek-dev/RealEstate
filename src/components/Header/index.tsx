import Image from 'next/image'
import {Button, Typography, Avatar, Menu, Dropdown, Space} from 'antd'
import styles from './header.module.scss'
import {memo} from 'react'
import {UserOutlined} from '@ant-design/icons'
import {UserInitialStateInterface} from '../../redux/user/userReducer'

const {Link} = Typography

interface IHeader {
  user: UserInitialStateInterface
  onLogout?: () => void
}

const Header: React.FC<IHeader> = ({user, onLogout}) => {
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
                    <Link href="/" onClick={onLogout}>
                      Logout
                    </Link>
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
