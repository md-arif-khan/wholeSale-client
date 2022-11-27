import React from 'react';
import Modal from '../../Modal/Modal';

const PhoneData = ({phone}) => {
  const {name,picture,resalePrice,orginalPrice,postTime,location,}=phone;
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
    <div className="card-actions justify-end">
      
      <label htmlFor="my-modal" className="btn  btn-primary">Book Now</label>
    </div>
  </div>
  <Modal phone={phone}></Modal>
</div>
    );
};

export default PhoneData;