import * as React from "react"
import "../styles/partners-section.scss"
import { StaticImage } from "gatsby-plugin-image"

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <h2 className="h4 text text--daark-mute">Our partners</h2>
      <ul className="partners-section__list row">
        <li className="partners-section__list-item">
          <StaticImage
            src="../images/hellosigh.png"
            alt="hellosigh"
            placeholder={"#000000"}
          />
        </li>
        <li className="partners-section__list-item">
          <StaticImage
            src="../images/upwork.png"
            alt="upwork"
            placeholder={"#000000"}
          />
        </li>
        <li className="partners-section__list-item">
          <StaticImage
            src="../images/rakuten.png"
            alt="rakuten"
            placeholder={"#000000"}
          />
        </li>
        <li className="partners-section__list-item">
          <StaticImage
            src="../images/petar.png"
            alt="petar"
            placeholder={"#000000"}
          />
        </li>
        <li className="partners-section__list-item">
          <StaticImage
            src="../images/zendesk.png"
            alt="zendesk"
            placeholder={"#000000"}
          />
        </li>
        <li className="partners-section__list-item">
          <StaticImage
            src="../images/hellosigh.png"
            alt="hellosigh"
            placeholder={"#000000"}
          />
        </li>
        <li className="partners-section__list-item">
          <StaticImage
            src="../images/upwork.png"
            alt="upwork"
            placeholder={"#000000"}
          />
        </li>
        <li className="partners-section__list-item">
          <StaticImage
            src="../images/rakuten.png"
            alt="rakuten"
            placeholder={"#000000"}
          />
        </li>
      </ul>
    </section>
  )
}

export default PartnersSection
