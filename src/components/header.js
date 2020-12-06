import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import tw from "twin.macro"

const StyledNavBar = tw.header`h-16 w-full bg-red-800`
const StyledHome = tw.button`font-cyber font-bold text-lg bg-purple-800 text-white`

const Header = ({ siteTitle }) => (
  <StyledNavBar>
    <Link to="/">
      <StyledHome>{siteTitle}</StyledHome>
    </Link>
  </StyledNavBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
