import React, { useEffect, useState } from 'react';
import Cart from './Cart';

const Data = () => {
    const [data, setData] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getData();
    },[]);
    const getData = async()=>{
        const data = await fetch("https://dummyjson.com/products");
        const response = await data.json();
        setData(response); 
    }
    const addToCart = (productId) =>{
        console.log("clicked");
        const result = data.products.filter(product => product.id === productId);
        setProducts([...products, result]);
    }
    
  return (
    <div className='flex gap-10'>
        <div>
        {   
        data && data.products.map((product) => {
        return <div key={product.id} className='p-1 flex gap-3 items-center'>
            <h2>{product.id}</h2>
            <h2>{product.title}</h2>
            <h2 className='font-bold'>${product.price}</h2>
            <button onClick={(e) => {
                e.preventDefault();
                addToCart(product.id)}} className='border px-4 py-2 text-sm rounded-md cursor-pointer bg-green-100 	duration-200 hover:scale-105'>Add</button>

        </div>
})
}
</div>
    {/* <h1 className='font-bold text-2xl mt-10'>Cart Products</h1>
    {products && products.map((product) => {
        return <div key={product.id}>
                <p>{product.title}</p>
            </div>
    })} */}
    <Cart products={products} />
    </div>
  )
}

export default Data