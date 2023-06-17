import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";

const Header = () => {
  const { user, logOut, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" m-auto me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Navbar>
              <Container>
                <Navbar.Brand href="/">
                  <img
                    src="./logo.png"
                    width="80"
                    height="40"
                    className="d-inline-block align-top"
                    alt="Travel Guru logo"
                  />
                </Navbar.Brand>
              </Container>
            </Navbar>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search your Destination"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav.Link href="#action1">News</Nav.Link>
            <Nav.Link href="#action2">Destination</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>

            <Nav.Link href="#action2" className="me-4">
              Contact
            </Nav.Link>
            <Nav>
              <>
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <Button variant="light" onClick={handleLogOut}>
                      Log out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/CreateAnAccount">CreateAnAccount</Link>
                  </>
                )}
              </>
            </Nav>

            <Button onClick={handleLogin} variant="warning">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
