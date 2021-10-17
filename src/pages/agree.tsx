import Head from 'next/head'
import {Typography} from 'antd'
import {CaretRightOutlined} from '@ant-design/icons'

const {Title, Paragraph} = Typography

const Agree: React.FC = () => {
  return (
    <>
      <Head>
        <title>DigitalEstate | Privacy policy</title>
      </Head>
      <Title level={1}>Privacy policy</Title>
      <Paragraph>
        This page informs you of our policies regarding the collection, use, and
        disclosure of personal data when you use our Service and the choices you
        have associated with that data. Our Privacy Policy for
        https://www.DigitalEstate.com is created with the help of the Free
        Privacy Policy website.
      </Paragraph>
      <Paragraph>
        We use your data to provide and improve the Service. By using the
        Service, you agree to the collection and use of information in
        accordance with this policy. Unless otherwise defined in this Privacy
        Policy, terms used in this Privacy Policy have the same meanings as in
        our Terms and Conditions, accessible from https://www.DigitalEstate.com
      </Paragraph>
      <Title level={2}>Information Collection And Use</Title>
      <Paragraph>
        We collect several different types of information for various purposes
        to provide and improve our Service to you.
      </Paragraph>
      <Title level={3}>Types of Data Collected</Title>
      <Title level={4}>Personal Data</Title>
      <Paragraph>
        While using our Service, we may ask you to provide us with certain
        personally identifiable information that can be used to contact or
        identify you ("Personal Data"). Personally identifiable information may
        include, but is not limited to:
      </Paragraph>
      <ul>
        <li>
          <CaretRightOutlined />
          Email address
        </li>
        <li>
          <CaretRightOutlined />
          First name and last name
        </li>
        <li>
          <CaretRightOutlined />
          Phone number
        </li>
        <li>
          <CaretRightOutlined />
          Address, State, Province, ZIP/Postal code, City
        </li>
        <li>
          <CaretRightOutlined />
          Cookies and Usage Data
        </li>
      </ul>
      <Title level={4}>Usage Data</Title>
      <Paragraph>
        We may also collect information how the Service is accessed and used
        ("Usage Data"). This Usage Data may include information such as your
        computer's Internet Protocol address (e.g. IP address), browser type,
        browser version, the pages of our Service that you visit, the time and
        date of your visit, the time spent on those pages, unique device
        identifiers and other diagnostic data.
      </Paragraph>
      <Title level={4}>Tracking & Cookies Data</Title>
      <Paragraph>
        We use cookies and similar tracking technologies to track the activity
        on our Service and hold certain information.
      </Paragraph>
      <Paragraph>
        Cookies are files with small amount of data which may include an
        anonymous unique identifier. Cookies are sent to your browser from a
        website and stored on your device. Tracking technologies also used are
        beacons, tags, and scripts to collect and track information and to
        improve and analyze our Service
      </Paragraph>
      <Paragraph>
        You can instruct your browser to refuse all cookies or to indicate when
        a cookie is being sent. However, if you do not accept cookies, you may
        not be able to use some portions of our Service.
      </Paragraph>
      <Paragraph>Examples of Cookies we use:</Paragraph>
      <ul>
        <li>
          <CaretRightOutlined />
          Session Cookies. We use Session Cookies to operate our Service.
        </li>
        <li>
          <CaretRightOutlined />
          Preference Cookies. We use Preference Cookies to remember your
          preferences and various settings.
        </li>
        <li>
          <CaretRightOutlined />
          Security Cookies. We use Security Cookies for security purposes.
        </li>
      </ul>
      <Title level={2}>Use of Data</Title>
      <Paragraph>We use the collected data for various purposes:</Paragraph>
      <ul>
        <li>
          <CaretRightOutlined />
          To provide and maintain the Service
        </li>
        <li>
          <CaretRightOutlined />
          To notify you about changes to our Service
        </li>
        <li>
          <CaretRightOutlined />
          To allow you to participate in interactive features of our Service
          when you choose to do so
        </li>
        <li>
          <CaretRightOutlined />
          To provide customer care and support
        </li>
        <li>
          <CaretRightOutlined />
          To provide analysis or valuable information so that we can improve the
          Service
        </li>
        <li>
          <CaretRightOutlined />
          To monitor the usage of the Service
        </li>
        <li>
          <CaretRightOutlined />
          To detect, prevent and address technical issues
        </li>
      </ul>
      <Title level={2}>Transfer Of Data</Title>
      <Paragraph>
        Your information, including Personal Data, may be transferred to — and
        maintained on — computers located outside of your state, province,
        country or other governmental jurisdiction where the data protection
        laws may differ than those from your jurisdiction.
      </Paragraph>
      <Paragraph>
        If you are located outside United States and choose to provide
        information to us, please note that we transfer the data, including
        Personal Data, to United States and process it there.
      </Paragraph>
      <Paragraph>
        Your consent to this Privacy Policy followed by your submission of such
        information represents your agreement to that transfer.
      </Paragraph>
      <Paragraph>
        We will take all steps reasonably necessary to ensure that your data is
        treated securely and in accordance with this Privacy Policy and no
        transfer of your Personal Data will take place to an organization or a
        country unless there are adequate controls in place including the
        security of your data and other personal information.
      </Paragraph>
      <Title level={2}>Changes To This Privacy Policy</Title>
      <Paragraph>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </Paragraph>
      <Paragraph>
        We will let you know via email and/or a prominent notice on our Service,
        prior to the change becoming effective and update the "effective date"
        at the top of this Privacy Policy.
      </Paragraph>
      <Paragraph>
        You are advised to review this Privacy Policy periodically for any
        changes. Changes to this Privacy Policy are effective when they are
        posted on this page.
      </Paragraph>
      <Title level={2}>Contact Us</Title>
      <Paragraph>
        If you have any questions about this Privacy Policy, please contact us:
      </Paragraph>
      <ul>
        <li>
          <CaretRightOutlined />
          By email: frart.ua@gmail.com
        </li>
        <li>
          <CaretRightOutlined />
          By visiting this page on our website: digitalestate.com
        </li>
        <li>
          <CaretRightOutlined />
          By phone number: +380508447776
        </li>
      </ul>
    </>
  )
}

export default Agree
