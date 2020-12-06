import React from "react"
import tw from "twin.macro"

import CybersecurityLogoSVG from "../../../images/cyber-security.svg"

const StyledCybersecurityIcon = tw.div`absolute text-white top-8 left-8`

const CybersecurityLogo = () => (
  <StyledCybersecurityIcon>
    <CybersecurityLogoSVG
      style={{ maxWidth: `60px`, maxHeight: `60px`, fill: `currentColor` }}
    />
  </StyledCybersecurityIcon>
)

export default CybersecurityLogo
