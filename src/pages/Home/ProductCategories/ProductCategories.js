import React from 'react';
import category1 from '../../../images/category/9201dc8270ad4d999fa3af69a389f1db.jpeg'
import category2 from '../../../images/category/download.png'
import category3 from '../../../images/category/thumb2-vivo-logo-steel-logo-vivo-communication-technology-vivo-smartphones-brands.jpg'
import ProductItem from './ProductItem';
const ProductCategories = () => {
    const phoneCategory=[
        {
            id:1,
            img:category1,
            brand:'samsung'

        },
        {
            id:2,
            img:category2,
            brand:'iphone'

        },
        {
            id:3,
            img:category3,
            brand:'vivo'

        }
    ]
    return (
        <div id="categoryProduct" className=''>
            <h1 className='text-center text-3xl font-bold mb-5 mt-4'>Products Category</h1>
           <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                phoneCategory.map(category=><ProductItem category={category}></ProductItem>)
            }
           </div>
        </div>
    );
};

export default ProductCategories;