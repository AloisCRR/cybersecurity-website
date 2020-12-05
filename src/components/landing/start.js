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
      Tag="section"
      className={className}
      fluid={imageData}
      style={{ filter: `brightness(0.3)` }}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = tw(BackgroundSection)`w-full h-screen`

export default StyledBackgroundSection
