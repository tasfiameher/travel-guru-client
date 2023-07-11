import React from 'react';


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';



const RightSideNav = () => {
    return (
        <Row xs={1} md={3} className="g-3 mx-auto mt-5">
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Img src={idx === 0 ? "Shajek.png" :
                            idx === 1 ? "Sreemongol.png" :
                                idx === 2 ? "sundorbon.png" :
                                    "sree.png"} />
                        <Card.Body>
                            <Card.Text>
                                <h3>{idx === 0 ? <Link to='/sajek'>Sajek</Link> :
                                    idx === 1 ? "Sreemongol" :
                                        idx === 2 ? "Sundorbon" :
                                            "sree"}</h3>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>




    );
}


< div >
    <button classNameName='rounded-circle mx-auto mt-5' >
        <AiOutlineLeft></AiOutlineLeft>
    </button>
    <button classNameName='rounded-circle mx-auto mt-5' >
        <AiOutlineRight></AiOutlineRight>
    </button>
</div >



export default RightSideNav;