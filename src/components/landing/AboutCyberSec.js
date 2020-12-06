import React from "react"
import tw from "twin.macro"

import AboutInfo from "./atoms/AboutInfo"
import AboutDivisions from "./atoms/AboutDivisions"

const StyledAbout = tw.section`flex flex-wrap w-full bg-black text-white font-cyber`

const About = () => (
  <StyledAbout>
    <AboutInfo />
    <AboutDivisions />
  </StyledAbout>
)

export default About
