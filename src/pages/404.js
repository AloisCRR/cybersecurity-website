import React from "react"
import tw from "twin.macro"
import SEO from "../components/seo"

const StyledNotFoundPage = tw.main`w-full h-screen flex justify-center items-center font-cyberSpace bg-black text-white`
const StyledTitle = tw.h1`text-9xl p-8`
const StyledDescription = tw.p``

const NotFoundPage = () => (
  <>
    <SEO title="404: Ruta no encontrada" />
    <StyledNotFoundPage>
      <StyledTitle>404</StyledTitle>
      <StyledDescription>
        La ruta a la que está intentando acceder no existe...
      </StyledDescription>
    </StyledNotFoundPage>
  </>
)

export default NotFoundPage
