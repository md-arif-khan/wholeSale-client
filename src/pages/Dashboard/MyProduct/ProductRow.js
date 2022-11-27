import React from 'react';

const ProductRow = ({book}) => {
    const {picture,name,ation,itemName,email,location,price,phone}=book;
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
              <div className="font-bold">{itemName}</div>
              <div className="text-sm opacity-50">{location}</div>
            </div>
          </div>
        </td>
        <td>
          {phone}          <br/>
                </td>
        <td>{price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default ProductRow;