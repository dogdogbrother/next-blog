import '../styles/globals.css'
import { StoreProvider } from 'store/index'
import Layout from 'components/layout'
import { initValue as userInitValue } from 'store/user'
import { initValue as catalogInitValue } from 'store/catalog'
function MyApp({ initialValue, Component, pageProps }) {
  const renderLayout = () => {
    if (Component.layout === null) {
      return <Component {...pageProps} />
    } else {
      return<Layout>
        <Component {...pageProps} />
      </Layout>
    }
  }
  return <StoreProvider initialValue={initialValue}>
    {renderLayout()}
  </StoreProvider>
}

MyApp.getInitialProps = () => {
  return {
    initialValue: {
      user: {
        userInfo: userInitValue,
      },
      catalog: {
        catalogInfo: catalogInitValue,
      },
    },
  };
};

export default MyApp
