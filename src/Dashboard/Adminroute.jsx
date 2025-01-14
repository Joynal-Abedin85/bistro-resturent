import React, { useContext } from 'react';
import useadmin from '../hook/useadmin';
import { Authcontext } from '../auth/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const Adminroute = ({children}) => {
    const {user,loading}= useContext(Authcontext)
    const [isadmin,isAdminloading] = useadmin()
    const location = useLocation()
    console.log(user)

    if (loading || isAdminloading){
        return <div className="min-h-screen "> <progress className='progress w-56 mx-auto'></progress></div>
    }

    if (user?.email && isadmin) {
        return children
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default Adminroute;