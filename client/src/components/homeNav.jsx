import React, { Component } from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";
import devNav from "./DevcNav.svg";

class HomeNav extends Component {
  render() {
    return (
      <div>
        <Navbar expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">
              <img src={devNav} alt="home" />
            </NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default HomeNav;
