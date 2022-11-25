import React from 'react';

const PhoneData = ({phone}) => {
  const {name,picture,resalePrice,orginalPrice,postTime,location}=phone;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='h-52' src={picture} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    );
};

export default PhoneData;