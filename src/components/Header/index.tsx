import React, {memo} from 'react'
import Image from 'next/image'
import {Button, Typography, Avatar, Menu, Dropdown, Space} from 'antd'

import {UserOutlined} from '@ant-design/icons'

import styles from './header.module.scss'
import {links} from './links'

const {Link} = Typography

interface IHeader {
  userName: string
  onLogout?: () => void
}

export const Header: React.FC<IHeader> = memo(({userName, onLogout}) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.header__logo}
          src="/logo.svg"
          width={128}
          height={22}
          alt="DigitalEstate"
        />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          {links.map((item, index) => (
            <li key={index} className={styles.nav_list__item}>
              <Dropdown
                placement="bottomCenter"
                overlay={
                  <Menu>
                    {item.groups.map(group => (
                      <Menu.ItemGroup key={group.name} title={group.name}>
                        {group.list.map(listItem => (
                          <Menu.Item key={listItem.href}>
                            <Link href={listItem.href}>{listItem.label}</Link>
                          </Menu.Item>
                        ))}
                      </Menu.ItemGroup>
                    ))}
                  </Menu>
                }>
                <Link strong>{item.title}</Link>
              </Dropdown>
            </li>
          ))}
          <li className={styles.nav_list__item}>
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
})
