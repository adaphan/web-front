import React from 'react';
import Main from '../../templates/Main';

// style
import './Home.sass';
import AboutComponent from './thisComponents/About';
import HeroComponent from './thisComponents/Hero';
import PartnerComponent from './thisComponents/Partner';
import RateComponent from './thisComponents/Rate';

const Home = () => {
    return (
        <Main>
            <HeroComponent />
            <AboutComponent />
            <PartnerComponent />
            <RateComponent />
        </Main>
    );
};

export default Home;
