import React from 'react';
import background from '../BackImage/BackImage/sajekn.jpg';
import { Container } from 'react-bootstrap';

const Sajek = () => {
    return (
        <div  >
            <Container
                style={{
                    backgroundImage: `url("${background}")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',

                    width: '100vw',
                    height: '100vh',
                    position: 'relative'
                }}>
                <div className='d-flex '>
                    <div className='col-7 mx-auto mt-5 me-5'>
                        <div className='text-white text-center'>
                            <h2>SAJEK</h2>
                            <p>Sajek Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 2,000 feet (610 m) above sea level. Sajek Valley is known as the Queen of Hills & Roof of Rangamati.Sajek is a union located in the north of Chittagong Hill Tracts. It's under Baghaichori Upazila in Rangamati hill district, it is situated 67 kilometres (42 mi) north-east from Khagrachhari town and 95 kilometres (59 mi) north from Rangamati city. The border of Bangladesh and Mizoram of India is 8 kilometres (5.0 mi) east from Sajek.</p>
                        </div>
                    </div>
                    <form className='form-control mt-5'>

                        <div className="form-group">
                            <label for="origin">Origin</label>
                            <input type="text" className="form-control" id="origin" />
                        </div>
                        <div className="form-group">
                            <label for="destination">Destination</label>
                            <input type="text" className="form-control" id="destination" />
                        </div>
                        <div className="form-row">
                            <div className="col-md-6">
                                <label for="inputFrom">From</label>
                                <input type='date' className="form-control" id="inputFrom" />
                            </div>

                            <div className="col-md-6">
                                <label for="inputTo">To</label>
                                <input type="date" className="form-control" id="inputTo" />
                            </div>
                        </div>

                        <button
                            className='d-grid w-100 mt-3'
                            variant="warning">Start Booking</button>
                    </form>

                </div>

            </Container>

        </div>
    );
};

export default Sajek;