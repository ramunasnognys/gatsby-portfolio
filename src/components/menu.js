import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"

//Gatby Image
import { Image } from "../components/gatsby-images/image"
//icons
import { Close } from "../icons/icons.js"

export const Menu = () => {
  return (
    <div>
      <div className="products">
        <div className="menu-secondary-background-color"></div>

        <div className="menu-title">Products</div>
        <div className="close">
          <Close />
        </div>
        <div className="menu">
          <div className="container">
            <div className="menu-inner">
              <ul>
                <li>
                  <Link to={`/product/a`}>
                    <div className="wrapper">
                      <div className="menu-inner">
                        <nav>
                          <ul>
                            <li>
                              <Link to="/opportunities">Opportunities</Link>
                            </li>
                            <li>
                              <Link to="/solutions">Solutions</Link>
                            </li>
                            <li>
                              <Link to="/contact-us">Contact Us</Link>
                            </li>
                          </ul>
                        </nav>
                        {/* <div className="info">social</div>
                        <div className="locations">
                          Locations:
                         
                        </div> */}
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
