import React from "react";
import {Link} from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";


const MainNavigation = props =>{
    return(<MainHeader>
        <button className="main-navigation__menu-btn">
            <spam />
            <spam />
             <spam />
             </button>
             <h1 className="main-navigation__title">
                <Link to="/">Your Places</Link>

             </h1>
             <nav>
            <NavLinks />
             </nav>

    </MainHeader>)
}

export default MainNavigation;