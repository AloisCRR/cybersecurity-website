import React from "react"
import tw from "twin.macro"

import TwitterLogoSVG from "../../../images/twitter.svg"
import InstagramLogoSVG from "../../../images/instagram.svg"

const StyledSocialIcons = tw.div`text-white absolute bottom-0 left-8 flex flex-col`
const StyledButton = tw.button`focus:outline-none mb-8`

const SocialIcons = () => (
  <StyledSocialIcons>
    <StyledButton>
      <TwitterLogoSVG
        style={{
          maxWidth: `40px`,
          maxHeight: `40px`,
          fill: `currentColor`,
        }}
      />
    </StyledButton>
    <StyledButton>
      <InstagramLogoSVG
        style={{ maxWidth: `40px`, maxHeight: `40px`, fill: `currentColor` }}
      />
    </StyledButton>
  </StyledSocialIcons>
)

export default SocialIcons
