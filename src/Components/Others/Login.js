import React, { useContext, useState } from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import { AuthContext } from '../../Layouts/Auth';

const Login = () => {
    let {logIn, setUser, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate();
    let from = useLocation();
    from = from.state?.pathname || '/';

    // log in by email and password
    let logInByEmail = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        

        logIn(email, password)
            .then(res => {
                setUser(res.user)
                navigate(from, {replace: true})
            })
            .catch(err => {
                alert(err.code.replaceAll('auth/','').replaceAll('-',' ').toUpperCase())
            })
        
        e.target.reset();
    }


    // log in by google pop up
    let logInByGoogle = () => {
        googleLogin()
            .then(res => {
                setUser(res.user)
                navigate(from, {replace: true})
            })
            .catch(err => {
                alert(err.code.replaceAll('auth/','').replaceAll('-',' ').toUpperCase())
            })
    }

    //log in by facebook pop up
    let logInByFacebook = () => {
    }

    return (
        <div>
            <h1 className='text-4xl mt-10 text-success'>Please Log In</h1>
            <form  className='text-left max-w-lg mx-auto my-10  bg-base-300 rounded-2xl p-5' onSubmit={logInByEmail}>
                <p>Email</p>
                <input type="email" name='email' placeholder="Email please" className="input input-bordered input-secondary w-full my-5" required />
                <p>Password</p>
                <input type="password" name='password' placeholder="Password please" className="input input-bordered input-secondary w-full my-5" required />
                <div className='flex justify-between'>
                    <button type='submit' className='btn btn-success '>Log In</button>
                    <Link to='/register'>
                        <button className='btn btn-outline btn-info '>New User?</button>
                    </Link>
                </div>
            </form>
            <div className='flex justify-around w-[200px] mx-auto text-2xl bg-base-300 rounded-2xl p-5'>
                <p onClick = {logInByGoogle}><FcGoogle/></p>
                <p onClick = {logInByFacebook}><FaFacebook/></p>
            </div>
        </div>
    );
};

export default Login;