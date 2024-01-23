import "./navbar.css"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import { ClickAwayListener } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const handleNav = () => {
    setShowNav(!showNav)
  }

  const handleClickAway = () => {
    setShowNav(false)
  }

  let btnClassName = Array.from(document.getElementsByClassName("home-button"))

  btnClassName.forEach((btn) => {
    btn.addEventListener("click", handleNav)
  })

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="navbar">
        <Link to="/" onClick={() => setShowNav(false)}>
          <img src={logo} className="logo" />
        </Link>
        <ul className={showNav ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link className="home-button" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="home-button" to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="home-button" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="home-button" to="/gallery">
              Gallery
            </Link>
          </li>
        </ul>
        <div className="hamburger-container">
          <div className="hamburger" onClick={handleNav}>
            {showNav ? (
              <CloseIcon fontSize="large" className="icon" />
            ) : (
              <MenuIcon fontSize="large" className="icon" />
            )}
          </div>
        </div>
      </div>
    </ClickAwayListener>
  )
}
