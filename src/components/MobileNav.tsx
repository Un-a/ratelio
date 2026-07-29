import * as React from "react"
import "../styles/nav.scss"
import BurgerButton from "./BurgerButton"
import { useEffect } from "react"
import Nav from "./Nav"
import classNames from "classnames"

const BodyFix = () => {
  useEffect(() => {
    document.body.classList.add("body--fixed")
    return () => document.body.classList.remove("body--fixed")
  }, [])
  return null
}

interface Props {
  toggle: () => void
  isOpen: boolean
}

const MobileNav: React.FC<Props> = ({ toggle, isOpen }) => {
  return (
    <div
      className={classNames("mobile-nav", {
        "mobile-nav--open": isOpen,
      })}
    >
      {isOpen && <BodyFix />}
      <BurgerButton isOpen={isOpen} onClick={toggle} />
      <div className="mobile-nav__wrapper">
        <Nav onClick={toggle} />
      </div>
    </div>
  )
}

export default MobileNav
