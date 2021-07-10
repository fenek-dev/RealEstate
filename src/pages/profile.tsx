import {Space, Typography} from 'antd'
import Head from 'next/head'
import {useCallback, useContext, useEffect, useState} from 'react'
import {Tabs, Spin} from 'antd'
import Profile from '../components/Profile'
import Properties from '../components/Properties'
import {ParsedUrlQuery} from 'querystring'
import {useLazyQuery, useMutation} from '@apollo/client'
import {DELETE_PRODUCT, EDIT_USER, FULL_USER} from '../utils/queries'
import {UserContext} from '../utils/context'
import {User} from '../server/user/user.model'
import {GetServerSidePropsContext} from 'next'
import {getCookie} from '../utils/cookie'
import {Product} from '../server/product/product.model'

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
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const {user, setUser} = useContext(UserContext)
  const [getFullUser, fullUser] = useLazyQuery<{findUserById: User}>(FULL_USER)
  const [editUser, updatedUser] = useMutation<{updateUser: User}>(EDIT_USER)
  const [deleteProduct, deletedProduct] =
    useMutation<{deleteProduct: Product}>(DELETE_PRODUCT)

  useEffect(() => {
    if (fullUser.data) {
      setUser(prev => ({...prev, ...fullUser.data.findUserById}))
      setImageUrl(fullUser.data.findUserById.photo)
    }
  }, [fullUser.data])

  useEffect(() => {
    if (updatedUser.data) {
      setUser(prev => ({...prev, ...updatedUser.data.updateUser}))
    }
  }, [updatedUser.data])

  useEffect(() => {
    if (user) {
      getFullUser({
        variables: {
          id: user._id,
        },
      })
    }
  }, [user])

  useEffect(() => {
    if (deletedProduct.data) {
      setUser(prev => ({
        ...prev,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        products: prev.products.filter(
          item => item._id !== deletedProduct.data.deleteProduct._id,
        ),
      }))
    }
  }, [deletedProduct.data])

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
      console.log({...values, photo: imageUrl, _id: user._id})
      editUser({
        variables: {input: {...values, photo: imageUrl, _id: user._id}},
        context: {
          headers: {
            Authorization: `Bearer ${getCookie('token')}`,
          },
        },
      })
    },
    [user, imageUrl],
  )

  const onUpload = useCallback(file => {
    const reader = new FileReader()
    reader.readAsDataURL(file.file)
    reader.onloadend = () => {
      const image = reader.result as string
      setUser(prev => ({...prev, photo: image}))
    }
  }, [])

  const onDelete = useCallback((_id: string) => {
    deleteProduct({
      variables: {id: _id},
      context: {
        headers: {
          Authorization: `Bearer ${getCookie('token')}`,
        },
      },
    })
  }, [])

  return (
    <>
      <Head>
        <title>DigitalEstate | Profile</title>
      </Head>
      <Title level={1}>My profile</Title>
      <Tabs defaultActiveKey={!Array.isArray(query.tab) ? query.tab : '1'}>
        <TabPane tab="Profile" key="1">
          {!fullUser.loading ? (
            <Profile
              onFinish={onFinish}
              handleChange={handleChange}
              imageUrl={imageUrl}
              loading={loading}
              user={user}
              onUpload={onUpload}
            />
          ) : (
            <Space align="center" size="large">
              <Spin size="large" />
            </Space>
          )}
        </TabPane>
        <TabPane tab="My properties" key="2">
          {!fullUser.loading ? (
            <Properties products={user?.products} onDelete={onDelete} />
          ) : (
            <Space align="center" size="large">
              <Spin size="large" />
            </Space>
          )}
        </TabPane>
      </Tabs>
    </>
  )
}

export default ProfilePage

export async function getServerSideProps({query}: GetServerSidePropsContext) {
  return {
    props: {
      query,
    },
  }
}
