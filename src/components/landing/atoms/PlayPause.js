import React from "react"
import tw from "twin.macro"

import PauseButtonSVG from "../../../images/pause-button.svg"
// import PlayButtonSVG from "../../../images/play-button.svg"

const StyledMusic = tw.button`absolute text-white bottom-8 right-8 focus:outline-none`

const Music = () => (
  <StyledMusic>
    <PauseButtonSVG
      style={{ maxWidth: `40px`, maxHeight: `40px`, fill: `currentColor` }}
    />
  </StyledMusic>
)

export default Music
