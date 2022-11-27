import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider';

const AllSellers = () => {
    const {user}=useContext(AuthContext)
    const {data:sellers=[],isLoading,refetch}=useQuery({
        queryKey:['sellers'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/sellers')
            const data=await res.json()
            return data;
        }
    })
    const handleVerify=id=>{
        fetch(`http://localhost:5000/verify/${id}`,{
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    if(isLoading){
        return<Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl'>All Sellers</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
       <thead>
      <tr>
      <th></th>
        <th>Name</th>
        

        <th>Email</th>
        <th></th>
        <th>Action</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
           { sellers&&
            sellers.map((buyer,i)=><tr key={i}>
                <th>{i+1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td><button  disabled={buyer.verify==='verified'} onClick={()=>handleVerify(buyer._id)} className="btn-active btn btn-sm ">Verify</button></td>
                <td><button className="btn-active btn btn-sm ">Delete</button></td>
              </tr>)
           }    
      
    </tbody>
  </table>
              </div>
        </div>
    );
};

export default AllSellers;