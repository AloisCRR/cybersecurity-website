import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import tw from "twin.macro"

const NavBar = tw.header`h-16 w-full bg-red-800`
const Home = tw.button`font-cyber font-bold text-lg bg-purple-800 text-white`

const Header = ({ siteTitle }) => (
  <NavBar>
    <Link to="/">
      <Home>{siteTitle}</Home>
    </Link>
  </NavBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
