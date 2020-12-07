import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutCyberSecSection from "../components/landing/AboutCyberSec"
import VideoSection from "../components/landing/VideoSection"
import Companies from "../components/landing/Companies"
import PeopleWithInfluence from "../components/landing/PeopleWithInfluence"
import Phrases from "../components/landing/Phrases"
import LatinCompanies from "../components/landing/LatinCompanies"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <AboutCyberSecSection />
    <VideoSection />
    <Companies />
    <PeopleWithInfluence />
    <Phrases />
    <LatinCompanies />
  </Layout>
)

export default IndexPage
