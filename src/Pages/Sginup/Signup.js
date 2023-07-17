import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='mt-20'>
            <div className="hero">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">SignUp only Admin!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-10">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/login' href="#" className="label-text-alt link link-hover">You have an Account? Login?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value='SignUp' className="btn btn-primary"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;