import React from 'react'
import { NavLink} from "react-router-dom";

const Content = () => {
    return (
        <ul className="right" >
            <li><NavLink to='/'>Contact</NavLink></li>
            <li><NavLink to='/read_event'>Evenement</NavLink></li>
        </ul>
    )
}

export default Content
