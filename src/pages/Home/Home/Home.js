import React from 'react';
import Advertised from '../Advertised/Advertised';
import CustomerReview from '../CustomerReview/CustomerReview';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <HeaderBanner></HeaderBanner>
            <ProductCategories></ProductCategories>
            <Advertised></Advertised>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;