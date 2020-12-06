import React from "react"
import tw from "twin.macro"
import PropTypes from "prop-types"

const StyledPhraseContainer = tw.div`flex flex-1 flex-col justify-start items-center`
const StyledImageContainer = tw.div`w-full flex justify-center mb-12`
const StyledText = tw.p`mx-16 mb-8 italic text-center`

const PhraseCard = ({ text, author, children }) => (
  <StyledPhraseContainer>
    <StyledImageContainer>{children}</StyledImageContainer>
    <StyledText>"{text}"</StyledText>
    <div>{author}</div>
  </StyledPhraseContainer>
)

PhraseCard.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
}

PhraseCard.defaultProps = {
  text: `Text`,
  author: `Autor`,
}

export default PhraseCard
