import React from "react";
import { Col, Row } from "react-bootstrap";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <container>
        <Row>
          <Col lg="5">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="7">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </container>
    </div>
  );
};

export default Home;
