import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import { AuthContext } from '../../Layouts/Auth';


const Register = () => {
    let {createUser} = useContext(AuthContext)
    let [emailErr, setEmailErr] = useState('');
    let [passwordErr, setPasswordErr] = useState('');


    // log in by email and password
    let createNewUserByMail = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        if(password.length < 7){
            setPasswordErr('Password must be more than 6 characters');
            return;
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(err => alert(err.code,' ', err.message))
        
        setEmailErr('');
        setPasswordErr('');
        e.target.reset();
    }


    // log in by google pop up
    let logInByGoogle = () => {
        
    }

    //log in by facebook pop up
    let logInByFacebook = () => {
    }

    return (
        <div>
            <h1 className='text-4xl mt-10 text-info'>Please Register</h1>
            <form  className='text-left max-w-lg mx-auto my-10 bg-base-300 rounded-2xl p-5' onSubmit={createNewUserByMail}>
                <p>Name</p>
                <input type="name" name='name' placeholder="Name please" className="input input-bordered input-secondary w-full my-5" required />
                {emailErr && <p className='text-error text-xl'>{emailErr}</p>}

                <p>Email</p>
                <input type="email" name='email' placeholder="Email please" className="input input-bordered input-secondary w-full my-5" required />
                {emailErr && <p className='text-error text-xl'>{emailErr}</p>}

                <p>Password</p>
                <input type="password" name='password' placeholder="Password please" className="input input-bordered input-secondary w-full my-5" required />
                {passwordErr && <p className='text-error text-xl'>{passwordErr}</p>}
                <div className='flex justify-between'>
                    <button type='submit' className='btn btn-info'>Register</button>
                    <Link to='/login'>
                        <button className='btn btn-success btn-outline'>Old User?</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Register;