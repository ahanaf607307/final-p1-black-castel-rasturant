import React from 'react'

function FoodCard({item}) {
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
              
              
                <button className="btn bg-orange-500 text-white/80 w-full">Add to cart</button>
              
            </div>
          </div>
  )
}

export default FoodCard
