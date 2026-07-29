import * as React from "react"
import "../styles/first-sreen.scss"
import Button from "../components/Button"
import { StaticImage } from "gatsby-plugin-image"

const FirstScreenSection = () => {
  return (
    <section className="first-screen">
      <div className="first-screen__heading">
        <h1>
          <span className="text text--normal">
            Implement bright ideas for your project with a
          </span>{" "}
          professional{" "}
          <span className="text text--gradient-secondary">Fintech</span> &{" "}
          <span className="text text--gradient-primary">Blockchain</span>{" "}
          development team
        </h1>
        <Button>Contact us</Button>
      </div>
      <div className="first-screen__texts">
        <div className="first-screen__bg-image first-screen__bg-image--top">
          <StaticImage
            className="first-screen__image-spiral"
            src="../images/spiral.png"
            alt="spiral"
            placeholder={"#000000"}
            width={382}
            height={370}
          />
          <StaticImage
            className="first-screen__image-triangle"
            src="../images/triangle.png"
            alt="triangle"
            placeholder={"#000000"}
            width={424}
            height={388}
          />
        </div>
        <div className="row">
          <div className="first-screen__text-block">
            <h2 className="no-margin-bottom">
              Help your users{" "}
              <span className="text text--gradient-secondary">
                to concentrate
              </span>{" "}
              <span className="text text--normal">on successful trading</span>
            </h2>
          </div>
          <div className="first-screen__text-block">
            <p className="text text--middle text--mute">
              instead of solving the puzzle
              <br />
              of how to find the right functions
              <br />
              and buttons.
            </p>
            <p className="text text--large">
              We have combined decades of experience from both the crypto and
              traditional financial markets to create a modern and user-friendly
              interface for trading, blockchain and administration either for
              web and mobile apps.
            </p>
          </div>
        </div>
        <div className="first-screen__bg-image first-screen__bg-image--bottom">
          <StaticImage
            className="first-screen__image-sphere"
            src="../images/sphere.png"
            alt="sphere"
            placeholder={"#000000"}
            width={404}
            height={402}
          />
          <StaticImage
            className="first-screen__image-cross"
            src="../images/cross.png"
            alt="cross"
            placeholder={"#000000"}
            width={576}
            height={536}
          />
        </div>
      </div>
    </section>
  )
}

export default FirstScreenSection
