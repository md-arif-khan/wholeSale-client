import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../../Loading/Loading';
import ProductRow from './ProductRow';

const MyProduct = () => {
    const {user}=useContext(AuthContext)
 
    const uri=`https://wholesale-server-site.vercel.app/booking?email=${user?.email}`
    const {data:booking=[],isLoading,refetch}=useQuery({
        queryKey:['booking',user?.email],
        queryFn:async()=>{
            const res=await fetch(uri,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data=await res.json()
            return data;
        }
    })
    // if(isLoading){
    //     return  <Loading></Loading>
    // }
    return (
        <div>
            <h1 className='text-3xl'>My Orders </h1>
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
        {booking &&
            booking.map(book=><ProductRow key={book._id} book={book}></ProductRow>)
        }
    </tbody>
       <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
        </div>
    );
};

export default MyProduct;