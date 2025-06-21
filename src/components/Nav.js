import { NavLink } from "react-router"

const Nav =()=> {

    return (
        <nav className="nav top-nav justify-content-end justify-content-md-between">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/book">Books</NavLink>
        </nav>
    )
}

export default Nav