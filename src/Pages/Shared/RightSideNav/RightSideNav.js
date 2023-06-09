import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const RightSideNav = () => {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img src="Sajek.png" alt="Sre" class="border border-success rounded" />

                    <Card.Body>
                        <Card.Text>
                            SAJEK
                        </Card.Text>


                    </Card.Body>

                </Card>
                <br />
                <Card>
                    <Card.Img src="Sreemongol.png" alt="Sre" class="border border-success" />
                    <Card.Body>
                        <Card.Text>
                            SREEMONGOL
                        </Card.Text>

                    </Card.Body>

                </Card>
                <br />
                <Card >
                    <Card.Img src="sundorbon.png" class="border border-success" />
                    <Card.Body>
                        <Card.Text>
                            SUNDORBON
                        </Card.Text>


                    </Card.Body>

                </Card>
            </CardGroup>
        </div >
    );
};

export default RightSideNav;