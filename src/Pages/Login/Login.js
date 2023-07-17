import React, { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const {signIn}=useContext(AuthContext)
    const navigate = useNavigate()

    const hendalLogin =(event)=>{
        event.preventDefault() 
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        signIn(email,password)
        .then(res=>{
            const user = res.user;
            console.log(user)
            toast.success('Admin Login Successfully!')
            form.resat()
            navigate('/')
        })
        .catch(err=>console.log(err))
        console.log(email)
    }
    return (
        <div className='mt-20'>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login only Admin!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-10">
                        <form onSubmit={hendalLogin} className="card-body">
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
                                {/* <label className="label">
                                    <Link href="#" to='/signup' className="label-text-alt link link-hover">Don't have an account ? SignUp</Link>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value='Login' className='btn btn-primary '/>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;