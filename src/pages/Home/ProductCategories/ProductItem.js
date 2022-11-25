import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({category}) => {
    const {img,brand}=category;
    return (
        <div className='flex justify-center'>
            <Link to={`/phones/${brand}`}>
        <div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <img className='h-32 w-full rounded-md' src={img} alt="" />
    
  </div>
</div>
</Link>
        </div>
    );
};

export default ProductItem;