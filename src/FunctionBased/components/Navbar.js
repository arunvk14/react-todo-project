import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    return (
        <nav className="navBar">

            <button onClick={handleToggle}>
                {navbarOpen ? (<MdClose
                    style={{ color: "red", width: "40px", height: "40px" }} />
                ) : (
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                )}
            </button>

            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                {links.map(link => {
                    return (
                        <li key={link.id}>
                            <NavLink
                                exact
                                activeClassName="active-link"
                                to={link.path}
                                onClick={() => closeMenu()}
                            >
                                {link.text}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav >
    )
}
const links = [
    {
        id: 1,
        path: "/",
        text: "Home",
    },
    {
        id: 2,
        path: "/about",
        text: "About"
    },
    {
        id: 3,
        path: "/*",
        text: "New Page"
    }
]

export default Navbar;