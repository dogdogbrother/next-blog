import '../styles/globals.css'
import { StoreProvider } from 'store/index'
import Layout from 'components/layout'

function MyApp({ Component, pageProps }) {
  const renderLayout = () => {
    if (Component.layout === null) {
      return <Component {...pageProps} />
    } else {
      return <Layout>
        <Component {...pageProps} />
      </Layout>
    }
  }
  return <StoreProvider>
    {renderLayout()}
  </StoreProvider>
}

export default MyApp
