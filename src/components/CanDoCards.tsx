import * as React from "react"
import "../styles/can-do-cards.scss"
import { CanDoCardType } from "../constants/can-do-cards"
import CanDoCard from "./CanDoCard"

interface Props {
  list: CanDoCardType[]
}

const CanDoCards: React.FC<Props> = ({ list }) => (
  <div className="can-do-cards row">
    {list.map((item, index) => (
      <CanDoCard card={item} key={index} />
    ))}
  </div>
)

export default CanDoCards
