import React from "react"
import tw from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import PhraseCard from "./atoms/PhraseCard"

const StyledPhrasesContainer = tw.div`flex`
const PhrasesSectionTitle = tw.h1`my-24 uppercase text-center font-semibold text-3xl tracking-widest`
const StyledPhrases = tw.section`flex flex-col bg-black font-cyber text-white`

const Phrases = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { regex: "/^(quote)/" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 800, quality: 100, grayscale: true) {
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

  // Edward
  const phraseOne = `Argumentar que no te importa el derecho a la privacidad porque no tienes nada que esconder no es diferente a decir que no te importa la libertad de expresión porque no tienes nada que decir.`
  // Stephen
  const phraseTwo = `Creo que los virus informáticos deberían contar como vida. Creo que dice algo sobre la naturaleza humana que la única forma de vida que hemos creado hasta ahora es puramente destructiva. Hemos creado vida a nuestra propia imagen.`
  // Tim
  const phraseThree = `Si pones una llave bajo el tapete para la policía, un ladrón también puede encontrarla. Los criminales están usando todas las herramientas tecnológicas a su disposición para hackear las cuentas de la gente. Si saben que hay una llave escondida en algún lugar, no se detendrán hasta encontrarla.`

  const PhrasesArray = [
    { autor: "- Edward Snowden, Periodista", frase: phraseOne },
    { autor: "- Stephen Hawking, Físico teórico", frase: phraseTwo },
    { autor: "- Tim Cook, CEO de Apple", frase: phraseThree },
  ]

  return (
    <StyledPhrases>
      <PhrasesSectionTitle>Frases memorables</PhrasesSectionTitle>
      <StyledPhrasesContainer>
        {data.allFile.edges.map(({ node }, index) => (
          <PhraseCard
            author={PhrasesArray[index].autor}
            text={PhrasesArray[index].frase}
            key={node.base}
          >
            <Img
              style={{ borderRadius: `50%`, width: `200px`, height: `200px` }}
              imgStyle={{
                objectFit: "cover",
              }}
              fluid={node.childImageSharp.fluid}
            />
          </PhraseCard>
        ))}
      </StyledPhrasesContainer>
    </StyledPhrases>
  )
}

export default Phrases
