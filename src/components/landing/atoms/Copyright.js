import React from "react"
import tw from "twin.macro"

const StyledContainer = tw.div`w-full flex justify-center px-8 py-8 pb-4 text-gray-600`

const Copyright = () => (
  <StyledContainer>
    <div>
      Alois Carrera | Angel Cantoral © Todos los derechos reservados{" "}
      {new Date().getFullYear()}
    </div>
  </StyledContainer>
)

export default Copyright
