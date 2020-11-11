import React, { Component } from "react";
import { Container } from "reactstrap";
import devfoot from "./DevcFoot.svg";
//import "./sticky-footer.css";

class Footer extends Component {
  state = {};
  style = {
    backgroundColor: "#084482",
  };
  style_words = {
    color: "white",
    textAlign: "center",
  };
  style_image = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };
  render() {
    return (
      <React.Fragment>
        <div className="phantom"></div>

        <div style={this.style} className="footer">
          <Container>
            <img
              className="mt-3"
              style={this.style_image}
              src={devfoot}
              alt="footer"
            />
            <p className="mb-2" style={this.style_words}>
              Proudly an open source project by the Developers circle Benin
            </p>
            <hr style={{ border: "solid 0.5px white" }} />
            <h6 className="mt-2" style={this.style_words}>
              Terms and policy
            </h6>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
