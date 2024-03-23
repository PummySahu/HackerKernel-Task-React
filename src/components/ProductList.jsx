import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDeleteForever } from "react-icons/md";

const ProductList = ({products , onDeleteProduct }) => {


    const handleDelete = (index) => {
        onDeleteProduct(index);
      };


    return (

        <div className='px-6'>
            {products.length > 0 ? (
                products.map((product, index) => (
                    <div key={index} className="border border-gray-300 rounded-md p-4 my-2 flex justify-between items-center">
                        
                            <p className="text-lg font-semibold">{product.name}</p>
                            <p >{product.price}Rs.</p>
                       
                        <button onClick={() => handleDelete(index)} className='text-4xl text-red-500'><MdDeleteForever /></button>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No products found</p>
            )}
        </div>
    )
}

export default ProductList