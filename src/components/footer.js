import React from "react"
import tw from "twin.macro"

import Copyright from "./landing/atoms/Copyright"
import Contact from "./landing/atoms/Contact"

const StyledFooter = tw.footer`font-cyber w-full bg-black text-white flex flex-col border-t-4 border-gray-800`

/* © {new Date().getFullYear()} -{" "}
<a href="https://www.gatsbyjs.com">Alois Carrera</a> | Angel Cantoral
 */

const Footer = () => (
  <StyledFooter>
    <Contact />
    <Copyright />
  </StyledFooter>
)

export default Footer
