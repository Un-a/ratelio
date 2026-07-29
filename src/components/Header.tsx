import * as React from "react"
import Logo from "./logo"
import { Link } from "gatsby"
import "../styles/header.scss"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import classNames from "classnames"
import { useState } from "react"

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const toggle = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  return (
    <>
      <header
        className={classNames("header row container", {
          "header--white": isOpenMenu,
        })}
      >
        <Link to={"/"}>
          <Logo color={isOpenMenu ? "black" : "white"} />
        </Link>
        <Nav />
        <MobileNav toggle={toggle} isOpen={isOpenMenu} />
      </header>
    </>
  )
}

export default Header
