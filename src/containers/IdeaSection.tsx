import * as React from "react"
import "../styles/idea-section.scss"

const IdeaSection = () => {
  return (
    <section className="idea-section">
      <h2 className="idea-section__title">Your idea - our embodiment</h2>
      <ul className="idea-section__list row">
        <li className="idea-section__item">
          <p className="h2">Choose</p>
          <p>
            From the list of tools those ones that suit best to your project
            goals.
          </p>
        </li>
        <li className="idea-section__item">
          <p className="h2">Change</p>
          <p>Available solutions for your individual requests.</p>
        </li>
        <li className="idea-section__item">
          <p className="h2">Create</p>
          <p>You own unique functionality for solving a specific task.</p>
        </li>
      </ul>
    </section>
  )
}

export default IdeaSection
