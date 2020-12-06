import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroSection from "../components/landing/IntroPage"
import AboutCyberSecSection from "../components/landing/AboutCyberSec"

import IntroText from "../components/landing/atoms/IntroText"
import CybersecurityLogo from "../components/landing/atoms/CybersecurityLogo"
import SocialIcons from "../components/landing/atoms/Social"
import MusicControl from "../components/landing/atoms/PlayPause"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <IntroSection>
      <CybersecurityLogo isAbsolute />
      <SocialIcons />
      <MusicControl />
      <IntroText />
    </IntroSection>
    <AboutCyberSecSection />
  </Layout>
)

export default IndexPage
