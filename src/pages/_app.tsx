import {ApolloProvider} from '@apollo/client'
import {wrapper} from '../redux/store'
import '../styles/globals.scss'
import client from '../utils/graphql-client'

function MyApp({Component, pageProps}) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default wrapper.withRedux(MyApp)
