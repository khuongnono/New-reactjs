import React from "react";
import "./Nav.scss";
import logoUTE from "../../assets/images/LOGO UTE.png";
import logoFEEE from "../../assets/images/LOGO FEEE.png";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/control" className="logoUTE" exact={true}>
          <img src={logoUTE} style={{ width: "100px", height: "100px" }}></img>
        </NavLink>
        <NavLink to="/control" className="school-name" exact={true}>
          <p>TRƯỜNG ĐẠI HỌC</p>
          <p>SƯ PHẠM KỸ THUẬT TP.HCM</p>
        </NavLink>
        <NavLink to="/control" className="logoFEEE" exact={true}>
          <img src={logoFEEE} style={{ width: "126px", height: "97px" }}></img>
        </NavLink>
      </div>
    );
  }
}

export default Nav;
