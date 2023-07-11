import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from 'react-icons/fa';

const LeftSideNav = () => {
    return (
        <div className='m-auto mt-5 ms-5' >
            <h1>COX'S BAZAR</h1>
            <p>Cox's Bazar is a city, fishing port, tourism centre and district headquartres in southeastern Bangladesh. It is famous mostly for its long sandy beach, and it...</p>
            <Button variant="warning" >
                Booking  <FaArrowRight></FaArrowRight>
            </Button>
        </div>
    );
};
export default LeftSideNav;