import React from "react"
import tw from "twin.macro"

const StyledVideoInfo = tw.div`bg-black py-10 pl-20 flex-1`
const StyledVideoInfoTitleText = tw.p`mb-10 uppercase font-bold text-2xl tracking-wider text-center`
const StyledParagraph = tw.p`text-justify mb-6`

const VideoInfo = () => (
  <StyledVideoInfo>
    <StyledVideoInfoTitleText>
      CARRERAS DE CIBERSEGURIDAD
    </StyledVideoInfoTitleText>
    <div>
      <StyledParagraph>
        Los profesionales de la seguridad cibernética, o analistas de seguridad
        de la información, tienen una amplia gama de responsabilidades, pero el
        núcleo de su trabajo es proteger los datos en línea que se están
        comprometiendo. A medida que más información personal se almacena en
        línea, más importante es aumentar la seguridad.
      </StyledParagraph>
      <StyledParagraph>
        Las carreras de seguridad cibernética son complejas y se pueden
        encontrar muchas funciones en bancos, minoristas y organizaciones
        gubernamentales. En el trabajo, puede esperar salvaguardar los archivos
        y la red de una organización, instalar cortafuegos, crear planes de
        seguridad y supervisar la actividad. Si se produce una infracción, usted
        será responsable de identificar el problema y encontrar una solución
        rápidamente.
      </StyledParagraph>
      <p style={{ textAlign: `justify` }}>
        Debido a la frecuencia de los ataques cibernéticos, las carreras son
        variadas y hay una gran demanda de profesionales calificados.
      </p>
    </div>
  </StyledVideoInfo>
)

export default VideoInfo
