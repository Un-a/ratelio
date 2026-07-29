import * as React from "react"
import "../styles/question-section.scss"
import InputField from "../components/InputField"
import Button from "../components/Button"
import InputCheckbox from "../components/InputCheckbox"
import TextareaField from "../components/TextareaField"

const FORMSPARK_ACTION_URL = "https://submit-form.com/E2PuRFjH";

const QuestionSection = () => {
  return (
    <section className="question-section">
      <h2 className="question-section__title">
        <span className="text text--gradient-primary">Ask a question</span>
        <br />
        <span className="text text--normal">or describe your idea</span>
      </h2>
      <p>And we will contact you within "H time" to answer them in detail.</p>
      <form action={FORMSPARK_ACTION_URL} className="question-section__form row">
        <div className="question-section__form-item question-section__form-item--short">
          <InputField
            name={"name"}
            placeholder={"Name"}
            wide
            type={"text"}
            required
          />
        </div>
        <div className="question-section__form-item question-section__form-item--short">
          <InputField
            name={"email"}
            placeholder={"Email"}
            type={"email"}
            wide
            required
          />
        </div>
        <div className="question-section__form-item">
          <InputField
            name={"question"}
            placeholder={"Description of the question"}
            type={"text"}
            wide
            required
          />
        </div>
        <div className="question-section__form-item">
          <TextareaField
            name={"idea"}
            placeholder={"Project or idea"}
            wide
            rows={3}
          />
        </div>
        <div className="question-section__form-item question-section__form-item--checkbox">
          <InputCheckbox
            name={"privacy policy"}
            label={
              <>
                I confirm that I read and agree to{" "}
                <a href="/">the privacy policy</a>
              </>
            }
            required
          />
        </div>
        <input type="hidden" name="_email.subject" value="You have a new message from ratelio.com!" />
        <Button type="submit">Send</Button>
      </form>
    </section>
  )
}

export default QuestionSection
