import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";
// import background from '../Images/Images/sea.jpg';



const Header = () => {
    const { user } = useContext(AuthContext);

    return (

        <Navbar expand="lg" >
            {/* <style>
                .nav-background
                    [
                        backgroundImage: `url("${background}")`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '100vw',
                        height: '100vh',
                        position: 'relative'


                ]
                
            </style> */}
            <Container >
                <Navbar.Brand>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                < Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className=" m-auto me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Navbar>
                            <Container>
                                <Navbar.Brand href="#home">
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


                        <Nav.Link href="#action2" className='me-4' >
                            Contact
                        </Nav.Link>
                        <Nav>
                            <Nav.Link href='#deets' >{user?.displayName}</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" >
                                {
                                    user?.photoURL ?
                                        <Image style={{ height: '40px' }} roundedCircle src={user.photoURL} ></Image>
                                        : <FaUser></FaUser>
                                }

                            </Nav.Link>

                        </Nav>

                        <Button variant='warning' >

                            <Link to="/login" >Login</Link>
                        </Button>



                    </Nav>


                </Navbar.Collapse >
            </Container >
        </Navbar >
    );
};

export default Header;