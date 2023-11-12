import React, { useEffect, useState } from "react";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopulerMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter( menu => menu.category === 'popular')

  return (
    <>
      <SectionTitle heading={"-Check it out-"} subHeading={"FROM OUR MENU"} />

      <div className="grid md:grid-cols-2 xl:gap-10 md:gap-6 gap-4 mb-12">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <div className="w-full flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-2 w-fit">
          View Full Menu
        </button>
      </div>
      
    </>
  );
};

export default PopulerMenu;
