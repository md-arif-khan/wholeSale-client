import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Loading/Loading';

const AllBuyers = () => {
    const {data:buyers=[],isLoading,refetch}=useQuery({
        queryKey:['buyers'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/buyers')
            const data=await res.json()
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
             <h1 className='text-3xl'>All Buyers</h1>
             <div className="overflow-x-auto">
  <table className="table w-full">
       <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
           { buyers &&
            buyers.map((buyer,i)=><tr key={i}>
                <th>{i+1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>verify</td>
              </tr>)
           }    
      
    </tbody>
  </table>
              </div>
        </div>
    );
};

export default AllBuyers;