import React, { useEffect, useState } from 'react';
import AdvertiseProduct from './AdvertiseProduct';
import axios from 'axios';
const Advertised = () => {
    const [advertises,setAdvertise]=useState([])
  
useEffect(()=>{
    axios.get('http://localhost:5000/advertise')
    .then(res => {  
        console.log('advertisement',res.data)
        setAdvertise(res.data)
})
.catch(err=>console.log(err))
},[])
    return (
        <div>
            <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
   
    <div class="mb-10 md:mb-16">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Advertise Products</h2>

     
    </div>
  

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
    {
        advertises.map(advertise=><AdvertiseProduct key={advertise._id} advertise={advertise}></AdvertiseProduct> )
    }
     
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Advertised;