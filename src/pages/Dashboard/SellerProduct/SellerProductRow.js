import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { async } from '@firebase/util';
import toast from 'react-hot-toast';

const SellerProductRow = ({sellerProduct}) => {
    const {picture,name,location,resalePrice,_id}=sellerProduct;
    const {data,refetch}=useQuery({
      queryKey:['sellerProduct'],
      queryFn:async()=>{
        const res=await fetch(`http://localhost:5000/sellerProduct`)
        const data=await res.json()
        return data;
      }
    })
    
    const deleteProduct=id=>{
      fetch(`http://localhost:5000/deleteProduct/${id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        refetch()
        console.log(data)
        toast.success('Delete successfully')
      })
    }
    const addAdvertisSection=sellerProduct=>{
        fetch('http://localhost:5000/advertise',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(sellerProduct)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.acknowledged===true){
           return toast.success('Advertise product added successfully')
          }
          toast.error(data.message)
       
        })
    }
    return (
        
            <tr>
        <th>
         
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={picture} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{location}</div>
            </div>
          </div>
        </td>
        <td>
                <br/>
                </td>
        <td>{resalePrice}</td>
        <th>
          <button onClick={()=>addAdvertisSection(sellerProduct)} className=" btn-active btn btn-sm mx-2">Ads</button>
          <button className="btn-active btn btn-sm mx-2">Sold</button>
          <button  onClick={()=>deleteProduct(_id)} className="btn-active btn btn-sm mx-2">Delete</button>
        </th>
      </tr>
       
    );
};

export default SellerProductRow;