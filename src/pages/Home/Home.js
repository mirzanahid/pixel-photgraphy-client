import React from 'react';
import { Container } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';
import Banner from '../shared/Banner/Banner';
import Services from '../shared/Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <>
            <Banner></Banner>
            <Services></Services>
        </>
    );
};

export default Home;