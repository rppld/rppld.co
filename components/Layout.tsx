import React from 'react'
import Head from 'next/head'
import BaseStyles from './BaseStyles'
import Header from './Header'
import Footer from './Footer'
import device from '../theme/device'

interface Props {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({ title, ...props }) => (
  <>
    <Head>
      <title>{title}</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-384x384.png"
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <BaseStyles />
    <Header />
    <main>{props.children}</main>
    <Footer />

    <style jsx>{`
      main {
        min-height: 100vh;
        background-color: white;
      }
    `}</style>
  </>
)

Layout.defaultProps = {
  title: 'Philipp Rappold, Developer',
}

export default Layout