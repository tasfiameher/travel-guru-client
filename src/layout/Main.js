import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <Container
        >

            <Header></Header>
            <Outlet></Outlet>
            {/*
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

            */ }
        </Container>
    );
};

export default Main;