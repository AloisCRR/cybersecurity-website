import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import tw from "twin.macro"

const StyledCompanyImages = tw.section`flex bg-black h-52`

const CompanyImages = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { regex: "/^(logo)/" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 100, grayscale: true) {
                base64
                aspectRatio
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  return (
    <StyledCompanyImages>
      {data.allFile.edges.map(({ node }) => (
        <Img
          style={{ width: `100%` }}
          imgStyle={{ objectFit: "contain", padding: `4rem` }}
          key={node.base}
          fluid={node.childImageSharp.fluid}
        ></Img>
      ))}
    </StyledCompanyImages>
  )
}

export default CompanyImages
