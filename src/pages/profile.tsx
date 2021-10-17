import {useCallback, useContext, useEffect, useState} from 'react'
import {Space, Typography, Tabs, Spin, notification} from 'antd'
import {GetServerSidePropsContext} from 'next'
import Head from 'next/head'
import {ParsedUrlQuery} from 'querystring'
import {useLazyQuery, useMutation} from '@apollo/client'

import {Profile} from '../components/Profile'
import {Properties} from '../components/Properties'
import {User} from '../server/user/user.model'
import {Product} from '../server/product/product.model'
import {getCookie} from '../utils/cookie'
import {UserContext} from '../utils/context'
import {DELETE_PRODUCT, EDIT_USER, FULL_USER} from '../utils/queries'
import {getBase64WithCallBack} from '../utils/file'

const {TabPane} = Tabs
const {Title} = Typography

interface IProfilePage {
  query: ParsedUrlQuery
}

const ProfilePage: React.FC<IProfilePage> = ({query}) => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const {user, setUser} = useContext(UserContext)
  const [
    getFullUser,
    {data: fullUserData, error: fullUserError, loading: fullUserLoading},
  ] = useLazyQuery<{findUserById: User}>(FULL_USER)
  const [editUser, {data: editUserData, error: editUserError}] =
    useMutation<{updateUser: User}>(EDIT_USER)
  const [deleteProduct, {data: deleteProductData, error: deleteProductError}] =
    useMutation<{deleteProduct: Product}>(DELETE_PRODUCT)

  useEffect(() => {
    if (fullUserError) {
      notification.error({
        message: fullUserError.name,
        description: fullUserError.message,
      })
    }
    if (editUserError) {
      notification.error({
        message: editUserError.name,
        description: editUserError.message,
      })
    }
    if (deleteProductError) {
      notification.error({
        message: deleteProductError.name,
        description: deleteProductError.message,
      })
    }
  }, [fullUserError, editUserError, deleteProductError])

  useEffect(() => {
    if (fullUserData) {
      setUser(prev => ({...prev, ...fullUserData.findUserById}))
      setImageUrl(fullUserData.findUserById.photo)
    }
  }, [fullUserData])

  useEffect(() => {
    if (editUserData) {
      setUser(prev => ({...prev, ...editUserData.updateUser}))
    }
  }, [editUserData])

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
    if (deleteProductData) {
      setUser(prev => ({
        ...prev,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        products: prev.products.filter(
          item => item._id !== deleteProductData.deleteProduct._id,
        ),
      }))
    }
  }, [deleteProductData])

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64WithCallBack(info.file.originFileObj, image => {
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
          {!fullUserLoading ? (
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
          {!fullUserLoading ? (
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
