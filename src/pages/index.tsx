import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import FirstScreenSection from "../containers/FirstScreenSection"
import IdeaSection from "../containers/IdeaSection"
import CanDoSection from "../containers/CanDoSection"
import TeamSection from "../containers/TeamSection"
import HowWeWorkSection from "../containers/HowWeWorkSection"
import PartnersSection from "../containers/PartnersSecion"
import QuestionSection from "../containers/QuestionSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <FirstScreenSection />
    <IdeaSection />
    <CanDoSection />
    <TeamSection />
    <HowWeWorkSection />
    <PartnersSection />
    <QuestionSection />
  </Layout>
)

export default IndexPage
