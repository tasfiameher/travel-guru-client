import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import background from '../Images/Image/sea.jpg';

const Home = () => {
    return (
        <div>
            <Container
                style={{
                    backgroundImage: `url("${background}")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '100vh',
                    position: 'relative'
                }}
            >

                <Row>
                    <Col lg="5">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">
                        <RightSideNav></RightSideNav>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;