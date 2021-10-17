import {Typography, Divider} from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from '@ant-design/icons'

import {links} from './links'

import styles from './footer.module.scss'

const {Title, Text} = Typography

export const Footer: React.FC = () => {
  return (
    <footer>
      <Divider />
      <section className={styles.footer_main}>
        <div className={styles.footer_description}>
          <Image src="/logo.svg" width={128} height={22} alt="DigitalEstate" />
          <Text
            className={styles.footer_description__text}
            aria-label="The Digital Estate is the way to find the best place to live">
            The Digital Estate is the way to find the best place to live
          </Text>
          <div className={styles.footer_icons}>
            <TwitterOutlined size={25} />
            <FacebookOutlined size={25} />
            <InstagramOutlined size={25} />
          </div>
        </div>
        {links.map((item, index) => (
          <div key={index} className={styles.footer_column}>
            <Title level={3}>{item.title}</Title>
            <ul>
              {item.list.map((listItem, index) => (
                <li className={styles.footer_column__item} key={index}>
                  <Link href={listItem.href}>{listItem.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <Divider />
      <section className={styles.footer_copyright}>
        <Text>&copy;2021 All right reserved</Text>
      </section>
    </footer>
  )
}
