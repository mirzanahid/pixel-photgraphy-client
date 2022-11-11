import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/shared/Footer/Footer';
import Header from '../../pages/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default Main;