import type { AppProps } from 'next/app'
import '~css/default';
// import '~css/fonts';
import '~css/variables';
import { Provider } from 'react-redux';
import { store } from '~store';
import AuthGuard from 'src/guards/AuthGuard';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>TEST</title>
      </Head>

      <Provider store={store}>
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      </Provider>
    </>
  )
}

export default MyApp
