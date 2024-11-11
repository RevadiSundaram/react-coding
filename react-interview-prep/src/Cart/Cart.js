import React from 'react'

const Cart = (props) => {
    
    const {products} = props;
    
    const addPrice = (products) => {
        const result = products.map(each => each[0].price).reduce((acc,cur) => acc+cur,0);
        console.log(result);
        return result.toFixed(2);
    }
  return (
    <div>
        <h1 className='font-bold text-2xl mt-10'>Cart Products</h1>
        {products && products.map((product,index)=>{
            return <div key={product[0].id} className='flex gap-3 p-1'>
                    <p>{index+1}</p>
                    <p>{product[0].title}</p>
                    <p>${product[0].price}</p>
                </div>
        })}
        <p>Total - ${products && addPrice(products)}</p>
    </div>
  )
}

export default Cart