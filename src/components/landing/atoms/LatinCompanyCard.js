import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

const StyledLatinCompanyCard = styled.div(() => [
  tw`p-12 flex flex-col`,
  `border-radius: 30px;`,
  `box-shadow: inset 0 0 15px rgba(55, 84, 170,0),
  inset 0 0 20px rgba(255, 255, 255,0),
  7px 7px 15px rgba(55, 84, 170,.15),
  -7px -7px 20px rgba(255, 255, 255,1),
  inset 0px 0px 4px rgba(255, 255, 255,.2);`,
  `max-width: 400px;`,
  `background: #f1f3f6`,
])

const StyledLatinCompanyName = tw.h1`font-bold text-2xl`
const StyledLatinCompanyAbout = tw.h1`text-justify mb-8`
const StyledLineSeparator = tw.hr`my-10 w-1/3 border-current`
const StyledImageContainer = tw.div`flex justify-center my-auto`

const LatinCompanyCard = ({ name, description, children }) => (
  <StyledLatinCompanyCard>
    <StyledLatinCompanyName>{name}</StyledLatinCompanyName>
    <StyledLineSeparator />
    <StyledLatinCompanyAbout>{description}</StyledLatinCompanyAbout>
    <StyledImageContainer>{children}</StyledImageContainer>
  </StyledLatinCompanyCard>
)

LatinCompanyCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
}

LatinCompanyCard.defaultProps = {
  name: `Text`,
  description: `Autor`,
}

export default LatinCompanyCard
