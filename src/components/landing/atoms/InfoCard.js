import React from "react"
import tw from "twin.macro"
import PropTypes from "prop-types"

const Title = tw.h4`font-bold py-5`
const Content = tw.p`text-justify`

const InfoCard = ({ text, title, children }) => (
  <div>
    {children}
    <Title>{title}</Title>
    <Content>{text}</Content>
  </div>
)

InfoCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
}

InfoCard.defaultProps = {
  text: `Text content`,
  title: `Title`,
}

export default InfoCard
