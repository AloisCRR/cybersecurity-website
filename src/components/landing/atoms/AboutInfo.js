import React from "react"
import tw from "twin.macro"

const StyledAboutInfo = tw.div`bg-info p-10 flex-1`
const StyledAboutInfoTitleText = tw.p`uppercase font-bold text-2xl tracking-wider`
const LineSeparator = tw.hr`my-10 w-1/3`
const StyledParagraph = tw.p`mb-6 text-justify`

const AboutInfo = () => (
  <StyledAboutInfo>
    <StyledAboutInfoTitleText>
      ¿De qué se trata la ciberseguridad?
    </StyledAboutInfoTitleText>
    <LineSeparator />
    <div>
      <StyledParagraph>
        Un enfoque de seguridad cibernética exitoso tiene múltiples capas de
        protección repartidas por las computadoras, redes, programas o datos que
        uno intenta mantener a salvo.
      </StyledParagraph>
      <StyledParagraph>
        En una organización, las personas, los procesos y la tecnología deben
        complementarse entre sí para crear una defensa eficaz contra los ataques
        cibernéticos.
      </StyledParagraph>
      <p style={{ textAlign: `justify` }}>
        Un sistema unificado de gestión de amenazas puede automatizar las
        integraciones entre los productos de seguridad y acelerar las funciones
        clave de las operaciones de seguridad: detección, investigación y
        reparación.
      </p>
    </div>
  </StyledAboutInfo>
)

export default AboutInfo
