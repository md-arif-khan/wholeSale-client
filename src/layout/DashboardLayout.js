import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../context/AuthProvider';
import Loading from '../Loading/Loading';

const DashboardLayout = () => {
  const {user}=useContext(AuthContext)
  const {data:users,isLoading,refetch}=useQuery({
    queryKey:['users',user?.email],
    queryFn:async()=>{
        const res=await fetch(`https://wholesale-server-site.vercel.app/users?email=${user.email}`)
        const data=await res.json()
        return data;
    }
})



    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet></Outlet>
     {/* <label  className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
  
  </div> 
  <div className="drawer-side text-white bg-[#5154D3]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 ">
    {
          users?.role==='buyer'&&<>
               <li className='font-bold'><Link to='/dashboard/myproduct'>My Orders</Link></li>
          </>
        }
        {
          users?.role==='admin'&&<>
          
               <li className='font-bold'><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
           <li className='font-bold'><Link to='/dashboard/allsellers'>All Sellers</Link></li>
          </>
        }
         {
          users?.role==='seller'&&<>
              <li className='font-bold'><Link to='/dashboard/sellerProduct'>My Product</Link></li>
              <li className='font-bold'><Link to='/dashboard/addproduct'>Add Product</Link></li>
          </>
        }
      
       
       
       
      
                 
      
    </ul>
  
  </div>
</div>
         </div>
    );
};

export default DashboardLayout;