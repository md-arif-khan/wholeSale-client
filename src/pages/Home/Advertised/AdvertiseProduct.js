import React from 'react';
import Modal from '../../Modal/Modal';

const AdvertiseProduct = ({advertise}) => {
    const {name,description, picture, resalePrice,postTime,sellerName}=advertise
    return (
      <div className="card bg-base-100 shadow-xl">
  <figure><img className='h-40' src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{resalePrice}</div> 
      <div className="badge badge-outline">{sellerName}</div>
      <div className="badge badge-outline">{postTime}</div>
      
      
    </div>
  </div>
</div>
    );
};

export default AdvertiseProduct;