import React from 'react'
import { Link} from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Content from "./Content";

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo center">MK-WBC Agenda </Link>
                <Content/>
            </div>
        </nav>
    )
}

export default Navbar;