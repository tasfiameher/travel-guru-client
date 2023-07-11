
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
// import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from 'react-icons/fa';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
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

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');
            })
            .catch(error => console.error(error))



    }

    return (
        <div className='bg-light' >
            <div className='w-50 mx-auto form-control pt-2' >
                <h2 className=' mb-3 mt-2 ' >Login</h2>
                <Form onSubmit={handleSubmit} >
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
                    <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                        <Form.Check

                            type="checkbox"


                            label=
                            {<> Remember Me <Link to='/ForgotPassword' > Forgot Password</Link> </>} />



                    </Form.Group>




                    <Button className='d-grid w-100' variant="warning" type="submit">
                        Login
                    </Button>
                    <br />

                    <p className='text-center' >Don't have an account? <Link to='/CreateAnAccount' >Create an account</Link></p>

                </Form>
            </div>
            <hr />

            <div className=' mx-auto d-flex flex-column w-50'>
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

export default Login;