import React from "react"
import tw from "twin.macro"

import Copyright from "./landing/atoms/Copyright"
import Contact from "./landing/Contact"

const StyledFooter = tw.footer`font-cyber w-full bg-black text-white flex flex-col border-t-4 border-gray-800 relative`

const Footer = () => (
  <StyledFooter>
    <Contact />
    <Copyright />
  </StyledFooter>
)

export default Footer
