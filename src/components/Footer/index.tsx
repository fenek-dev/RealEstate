import {Typography} from 'antd'
import Image from 'next/image'
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from '@ant-design/icons'
import Link from 'next/link'
import {Divider} from 'antd'
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
        <div className={styles.footerColoumn}>
          <Title level={3}>DigitalEstate</Title>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/agree">Privacy policy</Link>
            </li>
            <li>
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColoumn}>
          <Title level={3}>Buy</Title>
          <ul>
            <li>
              <Link href="/search?property=house&type=buy">Houses</Link>
            </li>
            <li>
              <Link href="/search?property=apartment&type=buy">
                Apartaments
              </Link>
            </li>
            <li>
              <Link href="/search?property=condo&type=buy">Condo</Link>
            </li>
            <li>
              <Link href="/search?property=office&type=buy">Office</Link>
            </li>
            <li>
              <Link href="/search?property=shop&type=buy">Shop</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColoumn}>
          <Title level={3}>Rent</Title>
          <ul>
            <li>
              <Link href="/search?property=house&type=rent">Houses</Link>
            </li>
            <li>
              <Link href="/search?property=apartment&type=rent">
                Apartaments
              </Link>
            </li>
            <li>
              <Link href="/search?property=condo&type=rent">Condo</Link>
            </li>
            <li>
              <Link href="/search?property=office&type=rent">Office</Link>
            </li>
            <li>
              <Link href="/search?property=shop&type=rent">Shop</Link>
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section className={styles.footerCopyright}>
        <Text>&copy;2021 All right reserved</Text>
      </section>
    </footer>
  )
}