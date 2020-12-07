import React from "react"
import tw from "twin.macro"

const StyledContainer = tw.div`w-full flex justify-between px-8 pb-8 text-gray-600`

const Copyright = () => (
  <StyledContainer>
    <div>
      Alois Carrera | Angel Cantoral © Todos los derechos reservados{" "}
      {new Date().getFullYear()}
    </div>
    <div>Tópicos especiales I</div>
  </StyledContainer>
)

export default Copyright
