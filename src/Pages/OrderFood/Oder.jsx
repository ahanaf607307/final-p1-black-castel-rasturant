import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderImg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import useMenu from "../Shared/Custom/useMenu";
import FoodCard from "../Shared/FoodCard/FoodCard";

function Oder() {
  const { category } = useParams();
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const { menu } = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
        <Helmet>
            <title>Order Food | Black Castel</title>
        </Helmet>
      <Cover
        img={OrderImg}
        heading={"Order Now"}
        title={"Would you like to try a dish?"}
        bannerHeignt={"h-[300px] md:h-[450px] lg:h-[500px]"}
        headingColor={"text-orange-400"}
      />
      <section className="my-14">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          {/* salad item */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
              {salad.map((item) => (
                <FoodCard key={item?._id} item={item} />
              ))}
            </div>
          </TabPanel>
          {/* Pizza item */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
              {pizza.map((item) => (
                <FoodCard key={item?._id} item={item} />
              ))}
            </div>
          </TabPanel>
          {/* Soups item */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
              {soup.map((item) => (
                <FoodCard key={item?._id} item={item} />
              ))}
            </div>
          </TabPanel>
          {/* Desserts item */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
              {dessert.map((item) => (
                <FoodCard key={item?._id} item={item} />
              ))}
            </div>
          </TabPanel>
          {/* Drinks item */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
              {drinks.map((item) => (
                <FoodCard key={item?._id} item={item} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
}

export default Oder;
