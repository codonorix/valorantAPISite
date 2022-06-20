import React from "react";
import {Link} from "react-router-dom";

import './navbar.css'

const NavBar = () => {
    return(
    <div>
        <nav id={"navStyle"}>
            <Link to={"/"} className={"navText"}>Home</Link>
            <Link to={"agents"} className={"navText"}>Agents</Link>
            <Link to={"buddies"} className={"navText"}>Buddies</Link>
            <Link to={"bundles"} className={"navText"}>Bundles</Link>
        </nav>
    </div>
    )
}

export default NavBar