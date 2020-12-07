import React from "react"
import tw from "twin.macro"

const StyledTitle = tw.h1`uppercase font-bold mb-4 text-xl`
const Links = tw.div`flex flex-col inline-block`
const Link = tw.div`hover:underline py-2 cursor-pointer`
const StyledContact = tw.div`p-8`

const Contact = () => (
  <StyledContact>
    <StyledTitle>Contacto</StyledTitle>
    <Links>
      <Link>Alois Carrera | Universidad Tecnológica de Panamá</Link>
      <Link>Angel Cantoral | Universidad Tecnológica de Panamá</Link>
    </Links>
  </StyledContact>
)

export default Contact
