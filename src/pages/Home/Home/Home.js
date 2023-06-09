import React from 'react';
import Advertised from '../Advertised/Advertised';
import Commission from '../Commission/Commission';
import CustomerReview from '../CustomerReview/CustomerReview';
import HeaderBanner from '../HeaderBanner/HeaderBanner';

import OurStory from '../OurStory/OurStory';
import OurTeam from '../OurTeam/OurTeam';
import ProductCategories from '../ProductCategories/ProductCategories';
import TrastedCompani from '../TrastedCompani/TrastedCompani';
import GrowBusiness from '../GrowBusiness/GrowBusiness';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <HeaderBanner></HeaderBanner>
            <ProductCategories></ProductCategories>
            <Advertised></Advertised>
            <OurStory></OurStory>
            <Commission></Commission>
            <OurTeam></OurTeam>
            <TrastedCompani></TrastedCompani>
            <GrowBusiness></GrowBusiness>
            <Contact></Contact>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;