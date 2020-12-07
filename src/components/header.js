import React from "react"

import IntroSection from "./landing/IntroPage"
import IntroText from "./landing/atoms/IntroText"
import CybersecurityLogo from "./landing/atoms/CybersecurityLogo"
import SocialIcons from "./landing/atoms/Social"
import MusicControl from "./landing/atoms/AudioPlayer"

const Header = () => (
  <IntroSection>
    <CybersecurityLogo isAbsolute />
    <SocialIcons />
    <MusicControl />
    <IntroText />
  </IntroSection>
)

export default Header
