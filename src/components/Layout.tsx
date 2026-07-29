import * as React from "react"

import "../styles/layout.scss"
import Header from "./Header"

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  )
}

export default Layout
