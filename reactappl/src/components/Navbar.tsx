import React from "react";
// import {NavLink} from "react-router-dom";
import { Link } from 'react-router5'

export const Navbar: React.FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper  blue lighten-1 px1">
                <a href="/" className="brand-logo">Type script</a>
                <ul className="right hide-on-med-and-down">
                    <li><Link routeName="home">Список</Link></li>
                    <li><Link routeName="about">Контакты</Link></li>
                </ul>
            </div>
        </nav>
    )
    // return (
    //     <nav>
    //         <div className="nav-wrapper  blue lighten-1 px1">
    //             <a href="/" className="brand-logo">Type script</a>
    //             <ul className="right hide-on-med-and-down">
    //                 <li><NavLink to="/">Список</NavLink></li>
    //                 <li><NavLink to="/about">Контакты</NavLink></li>
    //             </ul>
    //         </div>
    //     </nav>
    // )
}