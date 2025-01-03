import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import Orderonline from '../components/Orderonline';
import Bistroboss from '../components/Bistroboss';
import Ourmenu from '../components/Ourmenu';
import Recomend from '../components/Recomend';
import Paralax from '../components/Paralax';
import Review from '../components/Review';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet> 
            <title>Bistro | Home</title>
        </Helmet>
            <Banner></Banner>
            <div className="w-10/12 mx-auto">
            <Heading></Heading>
            <Orderonline></Orderonline>
            <Bistroboss></Bistroboss>
            <Ourmenu></Ourmenu>
            <Recomend></Recomend>
            </div>
            <Paralax></Paralax>
            <div className="w-10/12 mx-auto">
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;