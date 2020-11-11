import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import appNav from "./icons/brandname.svg";

class AppNavBar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">
              {/* Talent P<span style={{ color: "blue" }}>OO</span>l */}
              <h4 className="inline_nav">Talent P</h4>
              <span>
                <img src={appNav} alt="home" />
              </span>
              <h4 className="inline_nav">L</h4>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="nav-link">
                    About us
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="nav-link">
                    Directories
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="nav-link">
                    FAQ
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="nav-link">
                    Contact us
                  </Link>
                </NavItem>
                <NavItem className="ml-3 mb-3">
                  <Button outline color="primary" size="sm">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </Button>
                </NavItem>
                <NavItem className="ml-3 mb-3">
                  <Button color="primary" size="sm">
                    <Link to="/signUp" className="nav-link">
                      Sign up
                    </Link>
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavBar;
