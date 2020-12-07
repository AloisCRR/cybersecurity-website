import React from "react"
import tw from "twin.macro"

import ContactSection from "./atoms/ContactSection"

const StyledContact = tw.div`px-8 pt-8 flex justify-between`

const Contact = () => {
  const linksMail = [
    {
      text: `Alois Carrera | Fullstack Web Developer | Systems Engineer`,
      href: `mailto:aloiscarrera@gmail.com`,
    },
    {
      text: `Angel Cantoral | Python Developer | Systems Engineer`,
      href: `mailto:cantoral495@gmail.com`,
    },
  ]

  const linksGit = [
    {
      text: `Alois Carrera`,
      href: `https://github.com/AloisCRR`,
    },
    {
      text: `Angel Cantoral`,
      href: `https://github.com/Angel1598`,
    },
  ]

  return (
    <StyledContact>
      <ContactSection title={"Contacto"} links={linksMail} />
      <ContactSection
        justifyRight
        style={{ textAlign: `end` }}
        title={"GitHub"}
        links={linksGit}
      />
    </StyledContact>
  )
}

export default Contact
