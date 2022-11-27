import React from 'react';

const SellerProductRow = ({sellerProduct}) => {
    const {picture,name,location,resalePrice
    }=sellerProduct
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
          <button className=" btn-active btn btn-sm mx-2">Ads</button>
          <button className="btn-active btn btn-sm mx-2">Sold</button>
          <button className="btn-active btn btn-sm mx-2">Delete</button>
        </th>
      </tr>
       
    );
};

export default SellerProductRow;