import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"
import CybersecurityLogoSVG from "../../../images/cyber-security.svg"

const CybersecurityLogo = ({ isAbsolute }) => {
  const StyledCybersecurityIcon = isAbsolute
    ? tw.div`absolute text-white top-8 left-8`
    : tw.div`text-white top-8 left-8`

  return (
    <StyledCybersecurityIcon>
      <CybersecurityLogoSVG
        style={{ maxWidth: `60px`, maxHeight: `60px`, fill: `currentColor` }}
      />
    </StyledCybersecurityIcon>
  )
}

CybersecurityLogo.propTypes = {
  isAbsolute: PropTypes.bool,
}

CybersecurityLogo.defaultProps = {
  isAbsolute: false,
}

export default CybersecurityLogo
