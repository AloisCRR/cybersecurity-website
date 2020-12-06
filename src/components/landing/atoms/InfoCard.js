import React from "react"
import tw from "twin.macro"

import CybersecurityLogo from "./CybersecurityLogo"

const Title = tw.h4`font-bold py-5`
const Content = tw.p`text-justify`

const InfoCard = ({ text, title }) => (
  <div>
    <CybersecurityLogo />
    <Title>{title}</Title>
    <Content>{text}</Content>
  </div>
)

export default InfoCard
