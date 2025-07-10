/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `2rem`,
          minHeight: `97dvh`, // Use dvh
        }}
      >
        <main>{children}</main>
      </div>
      <footer
          style={{
            position: `relative`,
            marginTop: `auto`,
            fontSize: `var(--font-sm)`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          Updated at {process.env.GATSBY_BUILD_DATE} {` `} &nbsp; &#124;  &nbsp; {` `} <a href="https://github.com/kw-lee/kw-lee.github.io">Source Code</a>
        </footer>
    </>
  )
}

export default Layout
