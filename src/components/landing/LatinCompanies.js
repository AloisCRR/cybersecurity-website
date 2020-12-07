import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import tw, { styled } from "twin.macro"

import LatinCompanyCard from "./atoms/LatinCompanyCard"

const StyledLatinCompaniesContainer = styled.section(() => [
  tw`flex flex-col font-cyber font-semibold p-16`,
  `background: #f1f3f6;`,
  `color: rgba(51,51,51,1);`,
])
const StyledLatinCompaniesSectionTitle = tw.h1`uppercase font-bold text-3xl tracking-widest text-center mb-16`
const StyledLatinCompaniesCards = tw.div`flex font-cyber justify-evenly`

const LatinCompanies = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { regex: "/^(latin)/" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 100) {
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

  //   Tiene asistencia y contacto para Panamá
  const LC3 = {
    name: `KIO Networks`,
    description: `Compañía mexicana de expertos en Tecnologías de la Información que, con la
  infraestructura más robusta y segura, ofrece soluciones para los retos más
  complejos que hoy necesitan enfrentar las organizaciones de cualquier giro
  y tamaño.`,
    link: `https://www.kionetworks.com/`,
  }

  //   Tiene oficinas en Panamá
  const LC2 = {
    name: `Sofistic Cybersecurity`,
    description: `Empresa de ciberseguridad, nacida de investigadores en este campo, con oficinas en España, Panamá, Colombia, Chile y Dominicana, abarca los mercados Europeo y latinoamericano. La oferta de servicios está especialmente diseñada para la banca y sectores críticos, como gobiernos y empresas de telecomunicaciones o infraestructuras críticas.`,
    link: `https://www.sofistic.com/`,
  }

  //   Tiene oficinas en Panamá
  const LC1 = {
    name: `GM Sectec`,
    description: `GM Sectec ofrece soluciones y servicios innovadores en ciberseguridad, gobierno corporativo y cumplimiento, centrados en el control del riesgo digital. Sus soluciones están diseñadas para detectar ataques avanzados y responder a ellos de manera eficaz, lo que reduce el riesgo comercial, el fraude y el delito informático.`,
    link: `https://gmsectec.com/es/`,
  }

  const LCArray = [LC1, LC2, LC3]

  return (
    <StyledLatinCompaniesContainer>
      <StyledLatinCompaniesSectionTitle>
        Ciberseguridad en Panamá
      </StyledLatinCompaniesSectionTitle>
      <StyledLatinCompaniesCards>
        {data.allFile.edges.map(({ node }, index) => (
          <LatinCompanyCard
            key={node.base}
            name={LCArray[index].name}
            description={LCArray[index].description}
          >
            <a
              href={LCArray[index].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                style={{ width: `140px` }}
                fluid={node.childImageSharp.fluid}
              />
            </a>
          </LatinCompanyCard>
        ))}
      </StyledLatinCompaniesCards>
    </StyledLatinCompaniesContainer>
  )
}
export default LatinCompanies
