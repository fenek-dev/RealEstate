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
      <section className={styles.footerMain}>
        <div className={styles.footerDescription}>
          <Image src="/logo.svg" width={128} height={22} alt="DigitalEstate" />
          <Text
            className={styles.footerDescription__text}
            aria-label="The Digital Estate is the way to find the best place to live">
            The Digital Estate is the way to find the best place to live
          </Text>
          <div className={styles.footerIcons}>
            <TwitterOutlined size={25} />
            <FacebookOutlined size={25} />
            <InstagramOutlined size={25} />
          </div>
        </div>
        {links.map((item, index) => (
          <div key={index} className={styles.footerColumn}>
            <Title level={3}>{item.title}</Title>
            <ul>
              {item.list.map((listItem, index) => (
                <li key={index}>
                  <Link href={listItem.href}>{listItem.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <Divider />
      <section className={styles.footerCopyright}>
        <Text>&copy;2021 All right reserved</Text>
      </section>
    </footer>
  )
}
