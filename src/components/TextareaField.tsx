import * as React from "react"
import "../styles/input-filed.scss"
import classNames from "classnames"

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  wide?: boolean
  textarea?: boolean
}

const TextareaField: React.FC<Props> = ({ name, wide, textarea, ...props }) => {
  return (
    <div
      className={classNames("field", {
        "field--wide": wide,
      })}
    >
      <textarea className="field__textarea" id={name} name={name} {...props} />
    </div>
  )
}

export default TextareaField
