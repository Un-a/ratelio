import * as React from "react"
import "../styles/input-checkbox.scss"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  invalid?: boolean
  wide?: boolean
  label: string | React.ReactNode
}

const InputCheckbox: React.FC<Props> = ({
  name,
  invalid,
  wide,
  label,
  ...props
}) => {
  return (
    <div className="form-check">
      <label className="form-check-label">
        <input type="checkbox" name={name} id={name} {...props} />
        <span className="form-check-sign" />
        {label}
      </label>
    </div>
  )
}

export default InputCheckbox
