import * as React from "react"
import "../styles/burger-button.scss"
import classNames from "classnames"

interface Props {
  onClick: () => void
  isOpen: boolean
}

const BurgerButton: React.FC<Props> = ({ isOpen, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames("burger-button", {
        "burger-button--open": isOpen,
      })}
    >
      <span className="navbar-toggler-bar bar1" />
      <span className="navbar-toggler-bar bar2" />
      <span className="navbar-toggler-bar bar3" />
    </button>
  )
}

export default BurgerButton
