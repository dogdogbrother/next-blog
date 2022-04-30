import '../styles/globals.css'
import { StoreProvider } from 'store/index';

function MyApp({ Component, pageProps }) {
  return <StoreProvider>
    <Component {...pageProps} />
  </StoreProvider>
}

export default MyApp
