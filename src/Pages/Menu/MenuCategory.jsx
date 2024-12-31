import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from '../../Components/MenuItem'
import Cover from '../Shared/Cover/Cover'

function MenuCategory({items , heading , image}) {
  return (
    <div>
         <section>
        {
            heading && <Cover
            bannerHeignt={"h-[440px]"}
            img={image}
            headingColor={"text-white/80"}
            heading={heading}
            title={
              "Food is an essential part of our lives, not only for survival but also as a source of joy and connection. It reflects the culture, traditions, and creativity of people across the globe. From the spicy curries of India to the delicate sushi of Japan, every cuisine tells a unique story ?"
            }
          />
        }
      </section>
      <section className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {items.map((item) => (
          <MenuItem item={item} key={item?._id} />
        ))}
      </section>
      <Link to={`/order/${heading}`}>
      <button className='btn border-t-0 border-b-4 border-r-0 border-l-0 text-xl  text-black/90 text-center border-b-orange-600 bg-transparent'>Order Now</button>
      </Link>
    </div>
  )
}

export default MenuCategory
