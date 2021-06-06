import MainLayout from '../layouts/Main'
import {Typography} from 'antd'
import Head from 'next/head'
import {useState} from 'react'
import {Tabs} from 'antd'
import Profile from '../components/Profile'
import Properties from '../components/Properties'

const {TabPane} = Tabs
const {Title} = Typography

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

const ProfilePage = () => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, image => {
        setImageUrl(image)
        setLoading(false)
      })
    }
  }

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }
  return (
    <MainLayout>
      <Head>
        <title>DigitalEstate | Profile</title>
      </Head>
      <Title level={1}>My profile</Title>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Profile" key="1">
          <Profile
            onFinish={onFinish}
            handleChange={handleChange}
            imageUrl={imageUrl}
            loading={loading}
          />
        </TabPane>
        <TabPane tab="My properties" key="2">
          <Properties
            products={[
              {
                address: 'Moscow, Red Square',
                area: 123,
                photos: [
                  'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
                  'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
                  'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
                ],
                city: 'Moscow',
                date: 23235,
                price: 120,
                baths: 2,
                beds: 2,
                type: 'rent',
              },
              {
                address: 'Moscow, Red Square',
                area: 123,
                photos: [
                  'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
                  'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
                  'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
                ],
                city: 'Moscow',
                date: 23235,
                price: 120,
                baths: 2,
                beds: 2,
                type: 'rent',
              },
              {
                address: 'Moscow, Red Square',
                area: 123,
                photos: [
                  'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
                  'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
                  'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
                ],
                city: 'Moscow',
                date: 23235,
                price: 120,
                baths: 2,
                beds: 2,
                type: 'rent',
              },
            ]}
          />
        </TabPane>
      </Tabs>
    </MainLayout>
  )
}

export default ProfilePage
