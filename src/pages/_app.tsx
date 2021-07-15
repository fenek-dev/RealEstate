import {ApolloProvider} from '@apollo/client'
import React from 'react'
import MainLayout from '../layouts/Main'
import '../styles/globals.scss'
import client from '../utils/graphql-client'

function MyApp({Component, pageProps}) {
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  )
}

export default MyApp
