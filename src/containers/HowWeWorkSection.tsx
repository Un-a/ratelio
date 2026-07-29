import * as React from "react"
import "../styles/how-we-work-section.scss"
import { HowWeWorkList } from "../constants/how-we-work"
import Button from "../components/Button"
import { HOW_TO_WORK_ID } from "../constants/routes"

const HowWeWorkSection = () => {
  return (
    <section className="how-we-work-section" id={HOW_TO_WORK_ID}>
      <h2>
        How <span className="text text--gradient-primary">will the work</span>
        <br />
        <span className="text text--normal">on the project proceed?</span>
      </h2>
      <ol className="how-we-work-section__list row">
        {HowWeWorkList.map((item, index) => (
          <li className="how-we-work-section__list-item" key={index}>
            {item.text}
          </li>
        ))}
      </ol>
      <div className="how-we-work-section__btn">
        <Button>Contact us</Button>
      </div>
    </section>
  )
}

export default HowWeWorkSection
