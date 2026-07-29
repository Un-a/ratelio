import * as React from "react"
import "../styles/team-section.scss"
import { TEAM_ID } from "../constants/routes"

const TeamSection = () => {
  return (
    <section className="team-section" id={TEAM_ID}>
      <h2>“Ratelio” team is:</h2>
      <div className="team-section__row row">
        <div className="team-section__years">
          <p className="team-section__years-text">
            <span className="team-section__years-num">10+</span>
            <br />
            years of
          </p>
        </div>
        <ul className="team-section__list">
          <li className="team-section__list-item">
            highly qualified and responsible team
          </li>
          <li className="team-section__list-item">
            large services successfully launched
          </li>
          <li className="team-section__list-item">
            up-to-date development stack
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TeamSection
