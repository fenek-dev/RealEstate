import {ApolloClient, InMemoryCache} from '@apollo/client'
console.log(process.env.NEXT_PUBLIC_HOST)

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HOST + '/graphql',
  cache: new InMemoryCache(),
})

export default client
