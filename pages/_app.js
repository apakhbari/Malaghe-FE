import '../styles/globals.css'

import Head from 'next/head'

import { Fragment } from 'react'

import { CLIENT_NAME_FA, CLIENT_DESCRIPTION } from '../envConfig'

import ErrorBoundary from '../components/layout/ErrorBoundary'

import { CartsContextProvider } from '../store/cart-context'
import { UserCredentialsContextProvider } from '../store/user-context'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <ErrorBoundary>
        <UserCredentialsContextProvider>
          <CartsContextProvider>
            <Head>
              <title>{CLIENT_NAME_FA}</title>
              <meta name="description" content={CLIENT_DESCRIPTION} />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
          </CartsContextProvider>
        </UserCredentialsContextProvider>
      </ErrorBoundary>
    </Fragment>
  )
}

export default MyApp
