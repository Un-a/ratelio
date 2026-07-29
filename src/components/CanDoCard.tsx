import * as React from "react"
import "../styles/can-do-cards.scss"
import classNames from "classnames"
import { CanDoCardType } from "../constants/can-do-cards"

interface Props {
  card: CanDoCardType
}

const CanDoCard: React.FC<Props> = ({ card }) => (
  <div
    className={classNames("can-do-cards__item", {
      "can-do-cards__item--no-bg": !card.Image,
    })}
  >
    {card.Image && card.Image}
    <p className="h3 can-do-cards__title">{card.title}</p>
    <p className="text text--mute">{card.text}</p>
  </div>
)

export default CanDoCard
