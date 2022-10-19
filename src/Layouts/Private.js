import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from './Auth';

const Private = ({children}) => {
    let {user, loading} = useContext(AuthContext)
    let location = useLocation()

    if(loading)
        return;

    if( user )
        return children
    else
        return <Navigate to='/login' state={{redirectTo: location.pathname}} replace></Navigate>
};

export default Private;