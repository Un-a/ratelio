import * as React from "react"
import Carousel from "react-elastic-carousel"
import "../styles/carousel.scss"

interface Props {
  className?: string
  children: React.ReactNode
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const _CustomCarousel: React.FC<Props> = ({ children, className }) => {
  return (
    <Carousel
      itemsToShow={1}
      itemsToScroll={1}
      showArrows={false}
      pagination={true}
      className={className}
      isRTL={false}
    >
      {children}
    </Carousel>
  )
}

const CustomCarousel = React.memo(_CustomCarousel)
export default CustomCarousel
