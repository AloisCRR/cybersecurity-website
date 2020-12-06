import React from "react"
import tw from "twin.macro"

const StyledBase = tw.footer`font-cyber w-full py-3.5 bg-black text-white flex justify-center items-center border-t-4 border-gray-800`

const Footer = () => (
  <StyledBase>
    © {new Date().getFullYear()} -{" "}
    <a href="https://www.gatsbyjs.com">Alois Carrera</a> | Angel Cantoral
  </StyledBase>
)

export default Footer
