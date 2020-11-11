import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import signIn from "../SignUp/signUp.jpg";
import AppNavBar from "../../components/appNavbar";
import Footer from "../../components/appFooter";

class SignIn extends Component {
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <AppNavBar />
        <Container>
          <Row>
            <Col>
              <img
                style={{ float: "left", width: "auto" }}
                src={signIn}
                alt="sign up"
              />
            </Col>{" "}
            <Col>
              <h1>Welcome back!</h1>
              <p>Log in and stay connected</p>
              <Form>
                <FormGroup>
                  <Row>
                    <Col>
                      <Label for="email">Email</Label>
                      <Input
                        type="text"
                        name="name"
                        id="email"
                        placeholder="eg johndoe@gmail.com"
                        onChange={this.onChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Label for="name">Password</Label>
                      <Input
                        type="password"
                        name="name"
                        id="password"
                        placeholder="at least 6 characters"
                        onChange={this.onChange}
                      />
                    </Col>
                  </Row>

                  <Button color="primary mt-3" size="lg" block>
                    Log in
                  </Button>
                </FormGroup>
              </Form>

              <div
                style={{
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                <hr
                  style={{
                    width: "50px",
                    display: "inline-block",
                  }}
                />
                OR
                <hr
                  style={{
                    width: "50px",
                    display: "inline-block",
                  }}
                />
              </div>

              <Row>
                <Col>
                  <Button className="mr-2" color="primary">
                    Log in with facebook
                  </Button>
                </Col>
                <Col>
                  <Button className="ml-2" color="danger">
                    Log in with Google
                  </Button>
                </Col>
              </Row>

              <p className="mt-3" style={{ textAlign: "center" }}>
                Don't Have an account? <Link to="./signUp">Sign up</Link>
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default SignIn;
