import {wrapper} from '../redux/store'
import '../styles/globals.scss'

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
