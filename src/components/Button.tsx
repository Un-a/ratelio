import * as React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import "../styles/button.scss"

interface Props {
  type?: "button" | "submit"
  href?: string
  variant?: "primary" | "secondary"
  wide?: boolean
}

const Button: React.FC<Props> = ({
  children,
  type = "button",
  variant = "primary",
  href,
  wide,
}) => {
  const className = classNames("button", `button--${variant}`, {
    "button--wide": wide,
  })
  return href ? (
    <Link to={href} className={className}>
      {children}
    </Link>
  ) : (
    <button type={type} className={className}>
      {children}
    </button>
  )
}

export default Button
