import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuItem from "../Components/MenuItem";
import SectionTitle from "../Components/SectionTitle";

function PopularMenu() {

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
            menu.map(item => <MenuItem key={item._id} item={item}/> )
        }
    </section>
    </section>
  );
}

export default PopularMenu;
