import React from "react"
import tw from "twin.macro"

const StyledBase = tw.footer`font-cyber w-full py-3.5 bg-gray-800 text-white flex justify-center items-center`

const Footer = () => (
  <StyledBase>
    © {new Date().getFullYear()} -{" "}
    <a href="https://www.gatsbyjs.com">Alois Carrera</a> | Angel Cantoral
  </StyledBase>
)

export default Footer
