import * as React from "react"
import "../styles/input-filed.scss"
import classNames from "classnames"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  invalid?: boolean
  wide?: boolean
}

const InputField: React.FC<Props> = ({ name, invalid, wide, ...props }) => {
  return (
    <div
      className={classNames("field", {
        "field--invalid": invalid,
        "field--wide": wide,
      })}
    >
      <input className="field__input" id={name} name={name} {...props} />
      <span className="field__error">incorrected</span>
    </div>
  )
}

export default InputField
