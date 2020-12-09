/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 * <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
 */

import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        style={{
          position: `relative`,
          marginTop: `100vh`,
          backgroundColor: `black`,
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
