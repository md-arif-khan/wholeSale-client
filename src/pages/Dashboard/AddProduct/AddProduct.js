import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const AddProduct = () => {
  const {user}=useContext(AuthContext)
    const navigate=useNavigate()
  const imageHostKey = process.env.REACT_APP_IMGKEY;
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
  
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        
        if (imgData.success) {
          const date = new Date();
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();
          let currentDate = `${day}-${month}-${year}`;
          const addPhone = {
            brand: data.brand,
            name: data.productName,
            description:data.description,
            condition:data.condition,
            sellerName: data.sellerName,
            picture: imgData.data.url,
            location: data.location,
            resalePrice: data.resalePrice,
            orginalPrice: data.orginalPrice,
            useTime: data.useTime,
            postTime: currentDate,
            email:user.email
          };
         
          fetch('http://localhost:5000/sellerProduct',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addPhone)
          })
          .then(res=>res.json())
          .then(data=>{
           
            console.log(data)
            toast.success('Product added successfully')
            navigate('/dashboard/sellerProduct')
           reset()
            
          })
          
        }
       
      });
     
  };
  
  return (
    <div>
      <h1 className="text-3xl">Add Product</h1>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form
          onSubmit={handleSubmit(onSubmit)}
          novalidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
              <div className="col-span-full sm:col-span-3">
                <label for="firstname" className="text-sm">
                  Brand Name
                </label>
                <select
                  {...register("brand")}
                  className="select select-bordered w-full input-bordered input rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                >
                  
                  <option value="samsung">samsung</option>
                  <option value="iphone">iphone</option>
                  <option value="vivo">vivo</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="firstname" className="text-sm">
                  Condition
                </label>
                <select
                  {...register("condition")}
                  className="select select-bordered w-full input-bordered input rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                >
                  
                  <option value="excellent">excellent</option>
                  <option value="good">good</option>
                  <option value="fair">fair</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="lastname" className="text-sm">
                  Product Name
                </label>
                <input
                  {...register("productName")}
                  id="lastname"
                  type="text"
                  placeholder="product name"
                  className="w-full input-bordered input rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="seller" className="text-sm">
                  Seller Name
                </label>
                <input
                  {...register("sellerName")}
                  id="seller"
                  type="text"
                  placeholder="Seller Name"
                  className="w-full input-bordered input rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="address" className="text-sm">
                  Location
                </label>
                <input
                  {...register("location")}
                  id="address"
                  type="text"
                  placeholder="Location"
                  className="w-full input-bordered input rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="address" className="text-sm">
                Description
                </label>
               

              <textarea id="address"  {...register("description")} className="w-full input-bordered input rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"placeholder="Description,"></textarea>
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="city" className="text-sm">
                  Resale Price
                </label>
                <input
                  {...register("resalePrice")}
                  id="city"
                  type="text"
                  placeholder="resale price"
                  className="w-full input-bordered input rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="state" className="text-sm">
                  Orginal Price
                </label>
                <input
                  {...register("orginalPrice")}
                  id="state"
                  type="text"
                  placeholder="Orginale Price"
                  className="w-full input-bordered input rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="zip" className="text-sm">
                  Use Time
                </label>
                <input
                  {...register("useTime")}
                  id="zip"
                  type="text"
                  placeholder="use time"
                  className="w-full input-bordered input rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label
                  class="flex w-full cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                  tabindex="0"
                >
                  <span for="photo-dropbox" class="flex items-center space-x-2">
                    <svg class="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                      <path
                        d="M96 208H72A56 56 0 0172 96a57.5 57.5.0 0113.9 1.7"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="24"
                      ></path>
                      <path
                        d="M80 128a80 80 0 11144 48"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="24"
                      ></path>
                      <polyline
                        points="118.1 161.9 152 128 185.9 161.9"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="24"
                      ></polyline>
                      <line
                        x1="152"
                        y1="208"
                        x2="152"
                        y2="128"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="24"
                      ></line>
                    </svg>
                    <span class="text-xs font-medium text-gray-600">
                      Drop files to Attach, or
                      <span class="text-blue-600 underline">browse</span>
                    </span>
                  </span>
                  <input
                    {...register("image")}
                    id="photo-dropbox"
                    type="file"
                    class="sr-only"
                  />
                </label>
              </div>

              <button type="submit" className="btn btn-wide block">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
