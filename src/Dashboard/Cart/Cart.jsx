import React from 'react'
import { FaTrash } from 'react-icons/fa'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../Pages/Shared/Custom/useAxiosSecure'
import useCart from '../../Pages/Shared/Custom/useCart'

function Cart() {
    const [cart , refetch] = useCart()
    const axiosSecure = useAxiosSecure()
 const totalPrice = cart.reduce((sum , item) => sum + item.price , 0)
 const handleDeleteItem = (id) => {
  console.log(id)
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      

axiosSecure.delete(`/carts/${id}`) 
.then(res => {
  if(res.data.deletedCount > 0) {
    refetch()
    Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
  }
})
.catch(err => {
  console.log('error from deleted count component cart' , err )
})
    }
  });
 }
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
        <td><button className='btn btn-md ' onClick={()=>handleDeleteItem(items?._id)}>
          <FaTrash className='text-red-600'></FaTrash>
          </button></td>
             </tr>)}
      
      
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Cart
