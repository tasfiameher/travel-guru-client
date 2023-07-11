import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from 'react-icons/fa';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const CreateAnAccount = () => {
    const { createUser } = useContext(AuthContext);
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleFacebookSignIn = () => {
        providerLogin(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))

    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.event.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error('error', error);
            })



    }

    return (
        <div>
            <div className='w-50 mx-auto form-control' >
                <h2>Create an account</h2>
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name='fname'
                            placeholder="First Name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name='lname'
                            placeholder="Last Name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username or Email</Form.Label>
                        <Form.Control type="email" name='email'
                            placeholder="Username or Email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password'
                            placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name='password'
                            placeholder="Confirm Password" required />
                    </Form.Group>


                    <Button className='w-100' variant="warning" type="submit">
                        Create an account
                    </Button>
                    <br />
                    <p className='text-center' >Already have an account? <Link to='/login' >Login</Link></p>



                </Form>
            </div>
            <hr />
            <div className=' mx-auto d-flex flex-column w-50 '>
                <Button onClick={handleFacebookSignIn}
                    variant="outline-primary"
                    className="mb-3 justify-content-center">
                    <FaFacebook></FaFacebook> Continue with Facebook
                </Button>

                <Button onClick={handleGoogleSignIn}
                    variant="outline-primary"
                    className="mb-3 justify-content-center" >
                    <FcGoogle></FcGoogle>  Continue with Google

                </Button>
            </div>
        </div>
    );
};

export default CreateAnAccount;