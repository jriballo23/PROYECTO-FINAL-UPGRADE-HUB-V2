import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ButtonLogout } from "../../../components/ButtonLogOut/ButtonLogOut";
import { Button } from "primereact/button";
import { JwtContext } from "../../context/JwtContext";
import "./NavBar.scss";

const NavLinks = () => {
  const { jwt } = useContext(JwtContext);
  return (
    <>
      {!jwt && (
        <div>
          <NavLink className="Navlink" to="/entry">
            <Button label="Acceder" className="p-button-raised" />
          </NavLink>
       {/*    <NavLink className="Navlink"  to="/register">
            <Button label="Registro" className="p-button-raised" />
          </NavLink> */}
        <NavLink to="/">
            <Button label="" className="pi pi-home" />
          </NavLink>
        </div>
      )}

      {jwt && (
        <div>
          <NavLink to="/publicar">
            <Button className="pi pi-send" label="" />
          </NavLink>
        <NavLink to="/profile">
            <Button label="" className="pi pi-user" />
          </NavLink>
        <ButtonLogout/>
        </div>
        
        )} 
    </>
  );
};

export default NavLinks;
