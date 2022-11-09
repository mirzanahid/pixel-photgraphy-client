import React from 'react';
import { Container } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';
import Banner from '../shared/Banner/Banner';
import Contact from '../shared/Contact/Contact';
import Gallery from '../shared/Gallery/Gallery';
import Services from '../shared/Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
            <Gallery></Gallery>
        </>
    );
};

export default Home;