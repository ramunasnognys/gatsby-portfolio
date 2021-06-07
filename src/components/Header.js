import React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar"
import Buttons from "./Buttons"
//Icons
import {
  Instagram,
  Facebook,
  Vimeo,
  Pink,
  Github,
} from "../assets/svg/social-icons"

const Header = props => {
  const handleMode = () => {
    return props.mode === "light"
      ? props.setMode("dark")
      : props.setMode("light")
  }
console.log(handleMode);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__inner">
            <div className="header__logo">
              <Link to="/">RAMŪNAS.</Link>
            </div>
            <div className="header__menu">
            <button className="modebtn" onClick={handleMode}>MENU+</button>
              {/* <Buttons /> */}
            </div>
            {/* <Instagram /> */}

            {/* <Icon name={github} icon={getIcon(github)} /> */}
          </div>
        </div>
      </div>
      {/* <Hamburger state={state} /> */}
    </header>
  )
}

export default Header
