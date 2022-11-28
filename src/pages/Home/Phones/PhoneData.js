import React from 'react';
import Modal from '../../Modal/Modal';
import { FaCheckCircle } from "react-icons/fa";
const PhoneData = ({phone}) => {
  const {name,picture,resalePrice,orginalPrice,postTime,location,sellerName,verify  }=phone;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='h-52' src={picture} alt="Movie"/></figure>
  <div className="card-body">
    <p>{}</p>
    <h2 className="card-title">{name}</h2>
    <p>Orginal Price: {orginalPrice}</p>
    <p>ReSale Price: {resalePrice}</p>
    <p>Post Date: {postTime}</p>
    <p>Location: {location}</p>
    <div>
      <p></p>
    </div>
    <p className='flex items-center'>Seller: {sellerName} {verify && <FaCheckCircle className='text-green-500 ml-2'/>} </p>
    
    <div className="card-actions justify-end">
    
      <label htmlFor="my-modal" className="btn  btn-primary">Book Now</label>
    </div>
  </div>
  <Modal phone={phone}></Modal>
</div>
    );
};

export default PhoneData;