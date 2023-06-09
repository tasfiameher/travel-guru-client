import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import background from '../assets/Brands/sea.jpg';
const Main = () => {
    return (
        <Container
            style={{
                backgroundImage: `url("${background}")`,


            }}>
            <Header></Header>
            <container>
                <Row>
                    <Col lg='5'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='7'>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </container>

        </Container>
    );
};

export default Main;