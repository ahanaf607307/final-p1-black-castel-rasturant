import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionTitle from "../Components/SectionTitle";

function Recomended() {
    
    const [menu , setMenu] = useState([])
    useEffect(()=> {
        fetchData()
    } , [])

    const fetchData = async() => {
        const {data} = await axios.get('/menu.json') 
        const populer = data.filter(item => item.category === 'popular')
        setMenu(populer)
    }
  return (
    <section>
    <section>
      <SectionTitle
        heading={"---Check it out---"}
        title={"FROM OUR MENU"}
        color={"text-orange-600"}
      />
    </section>

  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-8">
      {
          menu.map(item => <div key={item?._id} className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={item.image}
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.recipe}</p>
              <p>{item.category}</p>
              <p>$ {item.price}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div> )
      }
  </section>
  </section>
  )
}

export default Recomended





