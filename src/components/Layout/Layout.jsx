import React, { Fragment } from "react"
import Header from "../Header/Header"
import Routers from "../../routers/Routers"
import Footer from "../Footer/Footer"
const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </Fragment>
  )
}

export default Layout
