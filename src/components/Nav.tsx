import * as React from "react"
import "../styles/nav.scss"
import Button from "./Button"
import { Link } from "gatsby"
import { HOW_TO_WORK_HASH, TEAM_HASH, TOOLS_HASH } from "../constants/routes"

interface Props {
  onClick?: () => void
}

const Nav: React.FC<Props> = ({ onClick }) => {
  return (
    <nav className="nav row">
      <ul className="nav__list row">
        <li className="nav__list-item">
          <Link className="nav__list-link" to={TOOLS_HASH} onClick={onClick}>
            Tools
          </Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__list-link" to={TEAM_HASH} onClick={onClick}>
            Team
          </Link>
        </li>
        <li className="nav__list-item">
          <Link
            className="nav__list-link"
            to={HOW_TO_WORK_HASH}
            onClick={onClick}
          >
            How we work
          </Link>
        </li>
      </ul>
      <Button variant={"secondary"}>Contact us</Button>
      <div className="nav__button">
        <Button wide>Contact us</Button>
      </div>
    </nav>
  )
}

export default Nav
