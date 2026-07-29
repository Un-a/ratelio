import * as React from "react"
import "../styles/can-do-section.scss"
import CanDoCards from "../components/CanDoCards"
import { CanDoCardsList } from "../constants/can-do-cards"
import CanDoCardsMobile from "../components/CanDoCardsMobile"
import { TOOLS_ID } from "../constants/routes"

const CanDoSection = () => {
  return (
    <section className="can-do-section" id={TOOLS_ID}>
      <h2>We can do for you:</h2>
      <CanDoCards list={CanDoCardsList} />
      <CanDoCardsMobile list={CanDoCardsList} />
    </section>
  )
}

export default CanDoSection
