import React from "react";

import MenuItem from "../Components/MenuItem";
import SectionTitle from "../Components/SectionTitle";
import useMenu from "../Pages/Shared/Custom/useMenu";

function PopularMenu() {
    const [menu] = useMenu()
    const populer = menu.filter(item => item.category === 'popular' )

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
            populer.map(item => <MenuItem key={item._id} item={item}/> )
        }
    </section>
    </section>
  );
}

export default PopularMenu;
