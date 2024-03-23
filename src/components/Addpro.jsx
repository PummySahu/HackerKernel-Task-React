import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Addpro = ({onAddProduct}) => {

  const [proName, setProName] = useState('');
  const [proPrice, setProPrice] = useState('');

  const ProductHandler = ()=>{

    if (!proName || !proPrice) return;

    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    const isDuplicate = existingProducts.some(product => product.name === proName);
    if (isDuplicate) {
      toast.error('Product with the same name already exists!');
      return;
    }
      
  const newProduct = { name: proName, price: proPrice };
  onAddProduct(newProduct);
  setProName('');
  setProPrice('');

  localStorage.setItem('products', JSON.stringify([...existingProducts, newProduct]));




  }



  return (
    <div className="px-4 py-6 ">
        <input
        type="text"
        placeholder="Product Name"
        value={proName}
        onChange={(e) => setProName(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
      />
      <input
        type="number"
        placeholder="Product Price"
        value={proPrice}
        onChange={(e) => setProPrice(e.target.value)}
        className="w-full mt-4 p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
      />
      <button onClick={ProductHandler} className="w-full mt-4 bg-green-500 text-white py-3 rounded hover:bg-green-600">
        Add Product
      </button>
    </div>

  )
}

export default Addpro