import { useState } from "react"
import { Link, NavLink, withRouter } from "react-router-dom"

function _AppHeader() {
    let [menuOpen, setMenuOpen] = useState(true)
    window.addEventListener("resize", (ev) => {
        if (ev.target.innerWidth > 400) setMenuOpen(() => (menuOpen = true))
        else setMenuOpen(() => (menuOpen = false))
    })
    return (
        <section className="app-header">
            <section className="header-wrapper">
                <Link to="/">
                    <h1>Mister Bitcoin</h1>
                </Link>

                {menuOpen && (
                    <nav>
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                        {/* <NavLink to="/user">Profile</NavLink> */}
                        <NavLink to="/contact">Contacts</NavLink>
                        <NavLink to="/statistics">Statistics</NavLink>
                    </nav>
                )}

                <button
                    className="menu-btn"
                    onClick={() =>
                        setMenuOpen((prevStatus) => (menuOpen = !prevStatus))
                    }
                >
                    <img src={require("../assets/imgs/menu.png")} alt="" />
                </button>
            </section>
        </section>
    )
}

export const AppHeader = withRouter(_AppHeader)
