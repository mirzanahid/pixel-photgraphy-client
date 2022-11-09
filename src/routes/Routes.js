import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import AddService from '../pages/AddService/AddService';
import Blog from '../pages/Blog/Blog';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import MyReviews from '../pages/MyReviews/MyReviews';
import AllServices from '../pages/shared/AllServices/AllServices';
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
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/allService',
                element: <AllServices></AllServices>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
           
        ]
    },

])



