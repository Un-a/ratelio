import * as React from "react"
import "../styles/can-do-cards.scss"
import { CanDoCardType } from "../constants/can-do-cards"
import CustomCarousel from "./CustomCarousel"
import CanDoCard from "./CanDoCard"

interface Props {
  list: CanDoCardType[]
}

const CanDoCardsMobile: React.FC<Props> = ({ list }) => {
  const carouselItems = list.filter(item => !!item.Image)
  const itemWithoutImage = list.filter(item => !item.Image)
  return (
    <div className="can-do-cards-mobile">
      <CustomCarousel>
        {carouselItems.map((item, index) => (
          <CanDoCard card={item} key={index} />
        ))}
      </CustomCarousel>
      {itemWithoutImage.map((item, index) => (
        <CanDoCard card={item} key={index} />
      ))}
    </div>
  )
}

export default CanDoCardsMobile
