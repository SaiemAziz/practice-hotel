import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from './Auth';

const Private = ({children}) => {
    let {user, loading, setRedirect} = useContext(AuthContext)

    let location = useLocation()

    if(loading)
        return <p>Loading....</p>;

    if( user )
    {
        setRedirect(null);
        return children
    }
    else
    {
        setRedirect(location.pathname);
        return <Navigate to='/login' replace></Navigate>
    }
};

export default Private;