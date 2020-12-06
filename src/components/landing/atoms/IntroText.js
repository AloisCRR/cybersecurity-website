import tw from "twin.macro"
import React from "react"

const StyledContainer = tw.div`absolute top-52 flex items-center flex-col w-full`
const StyledIntroText = tw.p`font-cyber font-bold tracking-widest text-6xl text-white`
const StyledIntroSubText = tw.p`font-cyber tracking-widest text-4xl text-white mt-8`
const StyledIntroSmallText = tw.p`font-cyber text-white text-center mt-24 w-1/3`

const IntroText = () => (
  <StyledContainer>
    <StyledIntroText>LA CIBERSEGURIDAD</StyledIntroText>
    <StyledIntroSubText>nos importa a todos...</StyledIntroSubText>
    <StyledIntroSmallText>
      La ciberseguridad es la práctica de defender las computadoras, los
      servidores, los dispositivos móviles, los sistemas electrónicos, las redes
      y los datos de ataques maliciosos.
    </StyledIntroSmallText>
  </StyledContainer>
)

export default IntroText
