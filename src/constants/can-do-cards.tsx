import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

export type CanDoCardType = {
  title: string | React.ReactNode
  text: string | React.ReactNode
  Image?: React.ReactNode
}

const imageOptions = {
  width: 400,
  height: 400,
  className: "can-do-cards__image",
  placeholder: "#111111",
}

export const CanDoCardsList: CanDoCardType[] = [
  {
    title: "Crypto Payment \nsystem",
    text: "Add deposit and withdrawal of user’s assets from your platform to the blockchain",
    Image: (
      <StaticImage
        src="../images/can-do-1.png"
        alt="Crypto Payment system"
        {...imageOptions}
      />
    ),
  },
  {
    title: "Trading \nrobots",
    text: "provide liquidity within an order book to ensure market participants can enter and exit a market efficiently.",
    Image: (
      <StaticImage
        src="../images/can-do-2.png"
        alt="Trading robots"
        {...imageOptions}
      />
    ),
  },
  {
    title: "Currency \nConverter",
    text: "allows exchanging one currency to another at the current exchange rate.",
    Image: (
      <StaticImage
        src="../images/can-do-3.png"
        alt="Currency Converter"
        {...imageOptions}
        className="can-do-cards__image can-do-cards__image--bottom"
      />
    ),
  },
  {
    title: "Broker CRM \n+ Admin Part",
    text: "customized opportunities for trading and management with friendly interfaces.",
    Image: (
      <StaticImage
        src="../images/can-do-4.png"
        alt="Broker CRM + Admin Part"
        {...imageOptions}
      />
    ),
  },
  {
    title: "Trading \nterminal",
    text: "with the implementation of all transactions on the Binance Exchange integrated into your platform.",
    Image: (
      <StaticImage
        src="../images/can-do-5.png"
        alt="Trading terminal"
        {...imageOptions}
      />
    ),
  },
  {
    title: (
      <>
        Your
        <br /> <span className="text text--gradient-primary">perfect case</span>
      </>
    ),
    text: "If you do not see proper tools in the list, contact us, describe your goals and we will do our best to offer you a decision.",
  },
]
