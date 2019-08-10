import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Header, Footer } from './Menubar'
import { BaseStyles } from '../theme'
import PageTransition from './PageTransition'

function Layout(props) {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              author
              email
              description
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description,
              },
              { name: 'author', content: data.site.siteMetadata.author },
            ]}
          >
            <html lang="en" />
            <link
              rel="shortcut icon"
              type="image/png"
              href="/favicon-128.png"
            />
          </Helmet>
          <BaseStyles />
          <Header author={data.site.siteMetadata.author} />
          <PageTransition {...props}>
            <div className="siteRoot">{props.children}</div>
          </PageTransition>
          <Footer email={data.site.siteMetadata.email} />
        </>
      )}
    />
  )
}

export default Layout
