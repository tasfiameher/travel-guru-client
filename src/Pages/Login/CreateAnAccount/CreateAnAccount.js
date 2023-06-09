import React from 'react';
import Button from 'react-bootstrap/Button';

const CreateAnAccount = () => {
    return (
        <div>
            <h2>Create an account</h2>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">First Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" />

                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Last Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" />

                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">UserName or Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <Button type="submit" className="btn btn-primary">Create an account</Button>
            </form>
        </div>
    );
};

export default CreateAnAccount;