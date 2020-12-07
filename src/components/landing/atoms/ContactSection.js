import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

const StyledTitle = tw.h1`uppercase font-bold mb-4 text-xl`
const StyledLinks = tw.div`inline-flex flex-col`
const StyledLink = tw.a`hover:underline py-2 inline-block flex-auto`

const ContactSection = ({ title, links, justifyRight }) => {
  const Container = justifyRight ? tw.div`text-right` : tw.div``

  return (
    <Container>
      <StyledTitle>{title}</StyledTitle>
      <StyledLinks>
        {links.map((e, index) => (
          <StyledLink
            href={e.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            {e.text}
          </StyledLink>
        ))}
      </StyledLinks>
    </Container>
  )
}

ContactSection.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
  justifyRight: PropTypes.bool,
}

ContactSection.defaultProps = {
  title: `Contacto`,
  justifyRight: false,
}

export default ContactSection
