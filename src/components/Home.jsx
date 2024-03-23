import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Addpro from './Addpro'
import ProductList from './ProductList';
import Search from './Search';
import Nav from './Nav';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [searchitem, setSearchitem] = useState('');

    const navigate = useNavigate()

    useEffect(()=>{
    if (!localStorage.getItem('token')) {
        navigate('/login');
      }
    }, [navigate]
    )

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
      }, []);

      
  const AddProductHandler = (newProduct) => {
    setProducts((oldProducts) => [...oldProducts, newProduct]);
    localStorage.setItem('products', JSON.stringify([...products, newProduct]));
  };


  
  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };


  const handleSearch = (searchitem) => {
    setSearchitem(searchitem);
  };

  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchitem.toLowerCase())
);


      

  return (
    <div className='min-h-screen w-full pt-20'>
      <Nav/>
        <Addpro onAddProduct={AddProductHandler}/>
        <Search searchitem={searchitem} onSearch={handleSearch}/>
        <ProductList products={filteredProducts} onDeleteProduct={handleDeleteProduct}/>
    </div>
  )
}

export default Home
