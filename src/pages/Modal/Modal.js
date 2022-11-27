import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const Modal = ({phone}) => {
    const {resalePrice,name,picture}=phone;
    const {user}=useContext(AuthContext)
    const handleModal=(event)=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const itemName=form.itemName.value;
        const price=form.price.value;
        const phone=form.phone.value;
        const location=form.location.value;
        
        const productBook={
            name,
            email,
            itemName,
            price,
            phone,
            location,
            picture
        }
        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(productBook)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast.success('Booking successfully')
        })
           form.reset()
    }
    
    return (
        <div>
            {/* The button to open modal */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <div className='flex justify-center'>
        <form onSubmit={handleModal}>
            <input readOnly defaultValue={user.displayName} name='name' type="text" placeholder="Type here" className="input input-bordered w-full mb-2" />
            <input readOnly defaultValue={user.email} name='email' type="text" placeholder="Type here" className="input input-bordered w-full mb-2" />
            <input readOnly defaultValue={name} name='itemName' type="text" placeholder="Type here" className="input input-bordered w-full mb-2" />
            <input  readOnly defaultValue={resalePrice} name='price' type="text" placeholder="Type here" className="input input-bordered w-full mb-4" />
            <input required name='phone' type="text" placeholder="Your phone number" className="input input-bordered w-full mb-4" />
            <input  required name='location' type="text" placeholder="Your location" className="input input-bordered w-full mb-4" />
            {/* <input required htmlFor="my-modal" className='btn btn-wide w-full ' type="submit" value="Submit" /> */}
           
            <div className="modal-action">
            <button  type="submit" ><label htmlFor="my-modal" className="btn btn-primary">Submit</label></button>
           </div>
        </form>
        </div>

   
  </div>
</div>
        </div>
    );
};

export default Modal;