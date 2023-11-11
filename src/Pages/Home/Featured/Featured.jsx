import React from "react";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed bg-cover my-20 text-white">
    <div className="w-full py-8 h-full backdrop-brightness-50">
      <SectionTitle subHeading={"Cheak it Out"} heading={"Featured Item"} />
      <div className="flex justify-evenly gap-3 items-center py-12 md:px-26 sm:px-8 px-20 sm:flex-nowrap flex-wrap">
        <div className="md:w-[50%]">
          <img src={featuredImg} alt="featured image" />
        </div>

        <div className="md:ml-10 md:w-[50%] space-y-1">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
            veritatis quis? Porro in quo odio numquam, voluptatibus quam
            perferendis veritatis sequi unde a nulla et dolores doloremque
            laboriosam eaque possimus eveniet quisquam facilis animi alias
            similique impedit! Voluptatibus ad quisquam voluptas deserunt, dolor
            placeat facilis sit ab aspernatur sed temporibus.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-2">Order Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Featured;
