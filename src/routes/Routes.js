import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Login from '../pages/shared/Login/Login';
import Signup from '../pages/shared/Signup/Signup';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
           
        ]
    },

])



