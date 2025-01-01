import React from "react";
import { Helmet } from "react-helmet-async";
import menuBg from "../../assets/menu/banner3.jpg";
import Dessert from "../../assets/menu/dessert-bg.jpeg";
import Pizza from "../../assets/menu/pizza-bg.jpg";
import Salads from "../../assets/menu/salad-bg.jpg";
import Soup from "../../assets/menu/soup-bg.jpg";

import MenuItem from "../../Components/MenuItem";
import SectionTitle from "../../Components/SectionTitle";
import Cover from "../Shared/Cover/Cover";
import useMenu from "../Shared/Custom/useMenu";
import MenuCategory from "./MenuCategory";
function Menu() {
  const { menu } = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div className="">
      <Helmet>
        <title>Menu | Black Castel</title>
      </Helmet>
      <section className="mb-10">
        <Cover
          bannerHeignt={"h-[300px] md:h-[450px] lg:h-[600px]"}
          img={menuBg}
          headingColor={"text-white/80"}
          heading={"OUR MENU"}
          title={"Would you like to try a dish?"}
        />
      </section>

      {/* Today offer */}
     <div className="my-8">
     <SectionTitle
        heading={"---Dont miss---"}
        title={"TODAY'S OFFER"}
        color={"text-orange-500"}
        headingColor={" text-gray-500"}
      />
      <section className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {offered.map((item) => (
          <MenuItem item={item} key={item?._id} />
        ))}
      </section>
    
     </div>
    
     
     
      {/* Pizzas offer */}
     <div className="my-8">
     <MenuCategory image={Pizza} items={pizza} heading={'pizza'}/>
     
     </div>
     
      {/* Salads offer */}
    <div className="my-8">
    <MenuCategory image={Salads} items={salad} heading={'salads'}/>
    
    </div>
      
      {/* Soups offer */}
     <div className="my-8">
     <MenuCategory image={Soup} items={soup} heading={'soup'}/>
     
     </div>

      {/* Desserts offer */}
      <div className="my-8">
      <MenuCategory image={Dessert} items={dessert} heading={'dessert'}/>
      </div>
    
    </div>
  );
}

export default Menu;
