import React from 'react';
// import Outlet
import { Outlet } from 'react-router-dom';

export default function Root () {
    return (
        <>
            <Outlet/>  
        </>
    );
}

