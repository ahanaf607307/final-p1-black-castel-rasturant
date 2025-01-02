import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Firebase/useAuth';
import useAxiosSecure from '../Custom/useAxiosSecure';
import useCart from '../Custom/useCart';

function FoodCard({item}) {
const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()
  const location = useLocation()
  const [,refetch] = useCart()

  const {user} = useAuth()
  const handleAddToCart = (cart) => {
    console.log(cart)
    if(user && user.email) {
const itemDetails = {
  itemId : item._id,
  email : user.email,
  image : item.image,
  name : item.name,
  price : item.price,
}
axiosSecure.post(`/carts` , itemDetails)
.then(res => {
  console.log(res.data)
  Swal.fire({
    title: "Item Added",
    text: "See At Add to Cart ",
    icon: "success"
  });
  refetch()
})
.catch(err => {
  console.log('err from foodcard post api' , err)
})
    }
    else{
      Swal.fire({
        title: "You Are Not logged in Now",
        text: "Please login to get the features !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes ! Login Now"
      }).then((result) => {
        if (result.isConfirmed) {
          // navigate(location?.state ? location.state : '/')
          // navigate('/login' , {state :location.state})
          navigate(location?.state ? location.state : '/login');
        }
      });
    }
    
  }
  return (
    <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10 relative">
              <img
                src={item.image}
                className="rounded-xl" />
                <p className='absolute top-12 right-12 text-sm bg-orange-500 px-3 py-1 rounded-2xl text-white'>$ {item.price}</p>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.recipe}</p>
              <p>{item.category}</p>
              
              
                <button onClick={()=> handleAddToCart(item)} className="btn bg-orange-500 text-white/80 w-full">Add to cart</button>
              
            </div>
          </div>
  )
}

export default FoodCard
