import React from "react"
import tw from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "computer-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data?.desktop?.childImageSharp?.fluid

  if (!imageData) {
    return <div>Picture not found</div>
  }

  return (
    <BackgroundImage
      Tag="header"
      style={{ position: `fixed` }}
      className={className}
      fluid={imageData}
    >
      <div
        style={{
          width: `100%`,
          height: `100%`,
          backgroundColor: `rgba(0,0,0,0.7)`,
        }}
      >
        {children}
      </div>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = tw(
  BackgroundSection
)`h-screen w-full fixed top-0`

export default StyledBackgroundSection
