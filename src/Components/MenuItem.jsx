import React from "react";

function MenuItem({ item }) {
  const { name, recipe, image, price } = item;
  return (
    <div className="grid grid-cols-12 items-center gap-x-3">
      <div className="col-span-3">
        <img className="w-[120px] roundItem" src={image} alt="" />
      </div>
      <div className="col-span-8">
        <div className="flex justify-between items-center">
          <h1 className="text-md font-semibold my-1">{name} ------------ </h1>
          <p className="text-orange-500">$ {price}</p>
        </div>
        <p className="text-sm text-gray-500">{recipe}</p>
      </div>
    </div>
  );
}

export default MenuItem;
