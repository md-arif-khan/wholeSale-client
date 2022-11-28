import React from 'react';

const AdvertiseProduct = ({advertise}) => {
    const {name,description, picture, resalePrice,postTime,sellerName}=advertise
    return (
        <div class="flex flex-col bg-white border rounded-lg overflow-hidden">
        <a href="#" class="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
          <img src={picture} loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
        </a>

        <div class="flex flex-col flex-1 p-4 sm:p-6">
          <h2 class="text-gray-800 text-lg font-semibold mb-2">
            <a href="#" class="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{name}</a>
          </h2>

          <p class="text-gray-500 mb-8">{description}</p>

          <div class="flex justify-between items-end mt-auto">
            <div class="flex items-center gap-2">
              <div class="w-16  flex items-center justify-center h-10 shrink-0 bg-gray-100  overflow-hidden">
              <span class="block  text-indigo-500">${resalePrice}</span>
              </div>

              <div>
                <span class="block text-indigo-500">{sellerName}</span>
                <span class="block text-gray-400 text-sm">{postTime}</span>
              </div>
            </div>

            <span class="text-gray-500 text-sm border rounded px-2 py-1">Article</span>
          </div>
        </div>
      </div>
    );
};

export default AdvertiseProduct;