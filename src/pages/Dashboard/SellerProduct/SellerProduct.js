import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import SellerProductRow from './SellerProductRow';

const SellerProduct = () => {
    const {user}=useContext(AuthContext)
    const {data:sellersProduct=[],isLoading,refetch}=useQuery({
        queryKey:['sellerProduct',user.email],
        queryFn:async()=>{
            const res=await fetch(`https://wholesale-server-site.vercel.app/sellerProduct?email=${user.email}`)
            const data=await res.json()
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-3xl'>My Product</h3>
                      <div className="overflow-x-auto w-full">
  <table className="table w-full">
       <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {sellersProduct &&
            sellersProduct.map(sellerProduct=><SellerProductRow key={sellerProduct._id}sellerProduct={sellerProduct}></SellerProductRow >)
        }
    </tbody>
       
    
  </table>
</div>
        </div>
    );
};

export default SellerProduct;