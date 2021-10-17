import React from 'react'
import {ApolloProvider} from '@apollo/client'

import MainLayout from '../layouts/Main'
import client from '../utils/graphql-client'

import '../styles/globals.scss'

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
