import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../../Loading/Loading';
import Modal from '../../Modal/Modal';
import PhoneData from './PhoneData';

const Phones = () => {
    const phones=useLoaderData()

    if(phones.length===0){
        return  <Loading></Loading>
    }
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-screen-xl mx-auto'>
            {  
                phones.map(phone=><PhoneData key={phone._id} phone={phone}></PhoneData>)
               
            }
        </div>
       
        </div>
    );
};

export default Phones;