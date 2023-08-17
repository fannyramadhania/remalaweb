import React, { useState } from "react";
import menuItems from "./MenuItems";
import "./navbar.css";
import logoremala from "../../assets/navbar/logoremala.png";



const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (

        <nav className="navbar">
                <h1 className="navbar-logo">
                    <img src={logoremala} style={{ width: '70px' }} onClick={()=>window.location.href="/"}/>
                </h1>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={active ? "nav-menu active" : "nav-menu"}>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
        </nav>
    );
};

export default Navbar;
