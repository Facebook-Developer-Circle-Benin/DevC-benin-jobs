import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  Label,
  Input,
  CustomInput,
} from "reactstrap";
import { SideBarData } from "./sideBarData";
import "./sideBar.css";
import appNav from "../icons/brandname.svg";

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <Navbar className="nav_bar mb-5" light expand="sm">
        <i className="fa fa-bars menu_bars" onClick={showSidebar} />
        <Nav className="ml-auto " navbar>
          <NavItem>
            <NavLink>
              <CustomInput
                type="switch"
                id="switch_id"
                name="switch_name"
                label="Available for free"
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <i className="fa fa-bell" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <i className="fa fa-user" />
              <span>
                {" "}
                <Label>Ango Jeffrey</Label>
              </span>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <nav className={sidebar ? "nav_menu active" : "nav_menu"}>
        <ul className="nav_menu_items" onClick={showSidebar}>
          <li className="navbar_toggle  ">
            <i className="fa fa-close menu_bars  i_style" />
          </li>
          <li className="ml-3 color">
            <NavbarBrand href="/" className="ml-3 color">
              <h4 className="inline_nav">Talent P</h4>
              <span>
                <img src={appNav} alt="home" />
              </span>
              <h4 className="inline_nav">L</h4>
            </NavbarBrand>
          </li>
          <hr style={{ borderTop: "1px solid white", marginRight: "15px" }} />
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cname}>
                <a href={item.path}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
