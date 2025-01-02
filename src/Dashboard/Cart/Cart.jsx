import React from 'react'
import { Link } from 'react-router-dom'
import useCart from '../../Pages/Shared/Custom/useCart'

function Cart() {
    const [cart] = useCart()
 const totalPrice = cart.reduce((sum , item) => sum + item.price , 0)
  return (
    <div>
    <div className='flex justify-between items-center px-5'>
    <h1 className='text-xl font-bold'>Total Product : {cart.length}</h1>
    <h1 className='text-xl font-bold'>Total Price : {totalPrice}</h1>
    <button className='btn bg-orange-500'>Pay Now</button>
    </div>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Product Category</th>
        <th>Price </th>
        <th>Action </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
        {cart.map((items , index) =><tr>
            <th>{index + 1}</th>
            <td>
                <img className='h-12' src={items?.image} alt="" />
            </td>
        <td>{items?.name}</td>
        <td>{items?.price}</td>
        <td><Link to={`/details/${items?.itemId}`}>Details</Link></td>
             </tr>)}
      
      
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Cart
