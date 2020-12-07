import React from "react"
import tw from "twin.macro"

import InfoCard from "./InfoCard"
import People from "../../../images/people.svg"
import Process from "../../../images/process.svg"
import Technology from "../../../images/technology.svg"

const Box = tw.div`flex flex-1 p-8`
const textOne = `Los usuarios deben entender y cumplir con los principios básicos de seguridad de datos como la elección de contraseñas fuertes, ser cuidadosos con los archivos adjuntos en el correo electrónico y hacer copias de seguridad de los datos.`
const textTwo = `Las organizaciones deben tener un marco de referencia sobre la forma en que se enfrentan a los intentos de ataques cibernéticos y a los que tienen éxito. Un marco bien respetado explica cómo puede identificar los ataques, proteger los sistemas, detectar y responder a las amenazas y recuperarse de los ataques exitosos.`
const textThree = `La tecnología es esencial para dar a las organizaciones y a los individuos las herramientas de seguridad informática necesarias para protegerse de los ataques cibernéticos. Hay tres entidades principales que deben ser protegidas: los dispositivos de punto final como las computadoras, los dispositivos inteligentes y los enrutadores; las redes y la nube. La tecnología común utilizada para proteger estas entidades incluye cortafuegos de última generación, filtrado de DNS, protección contra malware, software antivirus y soluciones de seguridad para el correo electrónico.`

const AboutDivisions = () => (
  <div
    style={{
      flex: `2`,
      padding: `2rem`,
      display: `flex`,
      flexWrap: `wrap`,
    }}
  >
    <Box style={{ flexDirection: `column` }}>
      <div style={{ marginBottom: `4rem` }}>
        <InfoCard text={textOne} title={`Personas`}>
          <People
            style={{
              maxWidth: `60px`,
              maxHeight: `60px`,
              fill: `currentColor`,
            }}
          />
        </InfoCard>
      </div>
      <InfoCard text={textTwo} title={`Procesos`}>
        <Process
          style={{ maxWidth: `60px`, maxHeight: `60px`, fill: `currentColor` }}
        />
      </InfoCard>
    </Box>
    <Box style={{ alignItems: `center` }}>
      <InfoCard text={textThree} title={`Tecnología`}>
        <Technology
          style={{ maxWidth: `60px`, maxHeight: `60px`, fill: `currentColor` }}
        />
      </InfoCard>
    </Box>
  </div>
)

export default AboutDivisions
