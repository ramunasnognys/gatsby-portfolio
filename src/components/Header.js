import React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar"
import Buttons from "./Buttons"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">

          <div className="header__inner">
            <div className="header__logo">
              <Link to="/">RAMŪNAS.</Link>
            </div>
            <div className="header__menu">
              <Buttons />
            </div>
          </div>

        </div>
      </div>
      {/* <Hamburger state={state} /> */}
    </header>
  )
}

export default Header
