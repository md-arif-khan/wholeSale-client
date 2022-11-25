import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhoneData from './PhoneData';

const Phones = () => {
    const phones=useLoaderData()

    
    return (
        <div className='grid grid-cols-2 gap-4 max-w-screen-xl mx-auto'>
            {
                phones.map(phone=><PhoneData key={phone._id} phone={phone}></PhoneData>)
            }
        </div>
    );
};

export default Phones;