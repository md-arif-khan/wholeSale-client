import React from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <HeaderBanner></HeaderBanner>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;