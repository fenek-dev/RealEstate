import MainLayout from '../layouts/Main'
import {Space, Typography} from 'antd'
import Head from 'next/head'
import {useCallback, useEffect, useState} from 'react'
import {Tabs, Spin} from 'antd'
import Profile from '../components/Profile'
import Properties from '../components/Properties'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import {IRootReducer} from '../redux/rootReducer'
import {editUserAction, uploadUserAction} from '../redux/user/userAction'
import {wrapper} from '../redux/store'
import {END} from 'redux-saga'
import {ParsedUrlQuery} from 'querystring'

const {TabPane} = Tabs
const {Title} = Typography

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

interface IProfilePage {
  query: ParsedUrlQuery
}

const ProfilePage: React.FC<IProfilePage> = ({query}) => {
  const store = useSelector((state: IRootReducer) => state.user)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const router = useRouter()
  useEffect(() => {
    if (!store._id && store.loading) {
      router.push('/signup')
    }
  }, [store._id, store.loading])

  useEffect(() => {
    setImageUrl(store.photo)
  }, [store.photo])

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

  const onFinish = useCallback(
    (values: any) => {
      dispatch(editUserAction({...values, _id: store._id}))
    },
    [store],
  )

  const onUpload = useCallback(
    file => {
      const reader = new FileReader()
      reader.readAsDataURL(file.file)
      reader.onloadend = () => {
        const image = reader.result as string
        dispatch(uploadUserAction({file: image, id: store._id}))
      }
    },
    [store._id],
  )

  return (
    <MainLayout>
      <Head>
        <title>DigitalEstate | Profile</title>
      </Head>
      <Title level={1}>My profile</Title>
      <Tabs defaultActiveKey={!Array.isArray(query.tab) ? query.tab : '1'}>
        <TabPane tab="Profile" key="1">
          {store.loading ? (
            <Profile
              onFinish={onFinish}
              handleChange={handleChange}
              imageUrl={imageUrl}
              loading={loading}
              user={store}
              onUpload={onUpload}
            />
          ) : (
            <Space align="center" size="large">
              <Spin size="large" />
            </Space>
          )}
        </TabPane>
        <TabPane tab="My properties" key="2">
          {store.loading ? (
            <Properties products={store.products} />
          ) : (
            <Space align="center" size="large">
              <Spin size="large" />
            </Space>
          )}
        </TabPane>
      </Tabs>
    </MainLayout>
  )
}

export default ProfilePage

export const getServerSideProps = wrapper.getServerSideProps(
  async ({store, query}) => {
    store.dispatch(END)

    return {
      props: {
        query,
      },
    }
  },
)
