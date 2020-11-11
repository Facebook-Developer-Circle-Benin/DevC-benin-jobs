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
import signUp from "./signUp.jpg";
import AppNavBar from "../../components/appNavbar";
import Footer from "../../components/appFooter";

class SignUp extends Component {
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
                style={{
                  float: "left",
                  width: "100%",
                  height: "auto",
                  minHeight: "50%",
                  minWidth: "350px",
                }}
                src={signUp}
                alt="sign up"
              />
            </Col>{" "}
            <Col>
              <h1>Connect great talents with top organizations</h1>
              <p>
                Create a profile to stay connected with the 1000+ graduates and
                potential employers.
              </p>
              <Form>
                <FormGroup>
                  <Label for="name">Full Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="user_name"
                    placeholder="eg John Doe"
                    onChange={this.onChange}
                  />
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
                    <Col>
                      <Label for="name">Admin ID</Label>
                      <Input
                        type="text"
                        name="name"
                        id="user_name"
                        placeholder="eg ADM-200"
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
                    <Col>
                      <Label for="name">Confirm Password</Label>
                      <Input
                        type="password"
                        name="name"
                        id="password"
                        placeholder="at least 6 characters"
                        onChange={this.onChange}
                      />
                    </Col>
                  </Row>

                  <div className="mt-3">
                    <Input
                      type="checkbox"
                      aria-label="Checkbox for terms and condition"
                    />
                    <span>
                      I agree to the{" "}
                      <a href="/terms">terms policy conditions</a>
                    </span>
                  </div>
                  <Button color="primary" size="lg" block>
                    SignUp
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
                    Sign up with facebook
                  </Button>
                </Col>
                <Col>
                  <Button className="ml-2" color="danger">
                    Sign up with Google
                  </Button>
                </Col>
              </Row>

              <p style={{ textAlign: "center" }}>
                Have an account already? <a href="/login">Log in</a>
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
