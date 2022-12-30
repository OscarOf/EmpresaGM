import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
		<>
        <ul className="nav justify-content-center bg-primary barra">
			  <li className="nav-item">
			    <NavLink className="nav-link text-white" to="/Home">Inicio</NavLink>
			  </li>
			  <li className="nav-item">
			    <NavLink className="nav-link text-white" to="/Services">Servicios</NavLink>
			  </li>
			  <li className="nav-item">
			    <NavLink className="nav-link text-white" to="/CarShop">🛒</NavLink>
			  </li>
		</ul>      
		</>                  
    )
};

export default NavBar;