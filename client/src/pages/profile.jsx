import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
  Input,
  ListGroupItemHeading,
} from "reactstrap";
import SideBar from "../components/SideBar/sidebar";

class Profile extends Component {
  state = {};
  style = {
    backgroundColor: "#f8f9fa",
    position: "relative",
    textAlign: "center",
  };
  render() {
    return (
      <div>
        <SideBar />
        <Row className="m-3">
          <Col style={this.style}>
            <h3>Ango Jeffrey</h3>
            <h5>Fullstack Developer</h5>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <hr />
            <i className="fa fa-map-pin" />
            <span> Lagos, Nigeria</span>
            <br />
            <i className="fa fa-envelope" />
            <span> ango@gmail.com</span>
            <br />
            <i className="fa fa-phone" />
            <span> 081765788</span>
            <br />
            <Button color="primary">Edit Profile</Button>
          </Col>
          <Col>
            <Row className="m-3">
              <Col style={this.style} className="m-3">
                <h3>CV</h3>
                <h5>File Uploaded</h5>
              </Col>
              <Col style={this.style} className="m-3">
                <h3>Portfolio</h3>
                <h5>Upload</h5>
              </Col>
            </Row>
            <Row style={this.style} className="m-3">
              <Col>
                <ListGroup>
                  <ListGroupItemHeading>Skillset</ListGroupItemHeading>
                  <ListGroupItem>
                    <Input type="checkbox" /> UI/ UX Design
                  </ListGroupItem>
                  <ListGroupItem>
                    <Input type="checkbox" /> UI/ UX Design
                  </ListGroupItem>
                  <ListGroupItem>
                    <Input type="checkbox" /> UI/ UX Design
                  </ListGroupItem>
                  <ListGroupItem>
                    <Input type="checkbox" /> UI/ UX Design
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
            <Row style={this.style} className="m-3">
              <Col>
                <ListGroup>
                  <ListGroupItemHeading>Social accounts</ListGroupItemHeading>
                  <ListGroupItem>
                    <Input type="checkbox" /> UI/ UX Design
                  </ListGroupItem>
                  <ListGroupItem>
                    <Input type="checkbox" /> UI/ UX Design
                  </ListGroupItem>
                  <ListGroupItem>
                    <Input type="checkbox" /> UI/ UX Design
                  </ListGroupItem>
                  <ListGroupItem>
                    <Input type="checkbox" /> UI/ UX Design
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
