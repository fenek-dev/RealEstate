import Image from 'next/image'
import {Button, Typography, Avatar, Menu, Dropdown, Space} from 'antd'
import styles from './header.module.scss'
import {memo} from 'react'
import {UserOutlined} from '@ant-design/icons'

const {Link} = Typography

interface IHeader {
  userName: string
  onLogout?: () => void
}

const Header: React.FC<IHeader> = ({userName, onLogout}) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/logo.svg" width={128} height={22} alt="DigitalEstate" />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.ItemGroup title="Living">
                    <Menu.Item key="1">
                      <Link href="/search?type=buy&property=house">House</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link href="/search?type=buy&property=apartment">
                        Apartment
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link href="/search?type=buy&property=condo">Condo</Link>
                    </Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="Commercial">
                    <Menu.Item key="1">
                      <Link href="/search?type=buy&property=office">
                        Office
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link href="/search?type=buy&property=shop">Shop</Link>
                    </Menu.Item>
                  </Menu.ItemGroup>
                </Menu>
              }>
              <Link strong>Buy</Link>
            </Dropdown>
          </li>
          <li>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.ItemGroup title="Living">
                    <Menu.Item key="1">
                      <Link href="/search?type=rent&property=house">House</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link href="/search?type=rent&property=apartment">
                        Apartment
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link href="/search?type=rent&property=condo">Condo</Link>
                    </Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="Commercial">
                    <Menu.Item key="1">
                      <Link href="/search?type=rent&property=office">
                        Office
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link href="/search?type=rent&property=shop">Shop</Link>
                    </Menu.Item>
                  </Menu.ItemGroup>
                </Menu>
              }>
              <Link strong>Rent</Link>
            </Dropdown>
          </li>
          <li>
            <Link strong href="/create">
              Sell
            </Link>
          </li>
        </ul>
        {userName ? (
          <Space>
            <Avatar icon={<UserOutlined />} />
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="1">
                    <Link href="/profile?tab=1">My profile</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link href="/profile?tab=2">Products</Link>
                  </Menu.Item>
                  <Menu.Item danger key="3">
                    <Link href="/" onClick={onLogout}>
                      Logout
                    </Link>
                  </Menu.Item>
                </Menu>
              }>
              <Link>{userName}</Link>
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
