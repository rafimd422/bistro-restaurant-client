import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import desertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "./../../Components/SectionTitle/SectionTitle";
import MenuItem from "./../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const OurMenu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((menu) => menu.category === "dessert");
  const soup = menu.filter((menu) => menu.category === "soup");
  const salad = menu.filter((menu) => menu.category === "salad");
  const pizza = menu.filter((menu) => menu.category === "pizza");
  const offered = menu.filter((menu) => menu.category === "offered");
  return (
    <div>
      <Helmet>
        <title> Bistro Boss Resturant | Menu </title>
      </Helmet>
      <>
        <Cover
          img={menuImg}
          title={"OUR Menu"}
          subtitle={"Would you like to try a dish?"}
        />

        <div className="my-16 ">
          <SectionTitle heading={"Don't Miss"} subHeading={"TODAY'S OFFER"} />
          <div className="grid md:grid-cols-2 xl:gap-10 md:gap-6 gap-4">
            {offered.map((item) => (
              <MenuItem key={item._id} item={item} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link to={"/shop"}>
              {" "}
              <button className="btn btn-outline border-0 mt-4 border-b-4">
                Order Now
              </button>
            </Link>
          </div>
        </div>

        <div>
          <Cover
            img={desertImg}
            title={"DESSERTS"}
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />

          <div className="my-16">
            <div className=" grid md:grid-cols-2 xl:gap-10 md:gap-6 gap-4">
              {dessert.map((item) => (
                <MenuItem key={item._id} item={item} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link to={"/shop"}>
                {" "}
                <button className="btn btn-outline border-0 mt-4 border-b-4">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Cover
            img={soupImg}
            title={"SOUPS"}
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />

          <div className="my-16">
            <div className=" grid md:grid-cols-2 xl:gap-10 md:gap-6 gap-4">
              {soup.map((item) => (
                <MenuItem key={item._id} item={item} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link to={"/shop#salad"}>
                {" "}
                <button className="btn btn-outline border-0 mt-4 border-b-4">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Cover
            img={pizzaImg}
            title={"PIZZA"}
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />

          <div className="my-16">
            <div className=" grid md:grid-cols-2 xl:gap-10 md:gap-6 gap-4">
              {pizza.map((item) => (
                <MenuItem key={item._id} item={item} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link to={"/shop#salad"}>
                {" "}
                <button className="btn btn-outline border-0 mt-4 border-b-4">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Cover
            img={saladImg}
            title={"SALADS"}
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />

          <div className="my-16">
            <div className=" grid md:grid-cols-2 xl:gap-10 md:gap-6 gap-4">
              {salad.map((item) => (
                <MenuItem key={item._id} item={item} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link to={"/shop#salad"}>
                {" "}
                <button className="btn btn-outline border-0 mt-4 border-b-4">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default OurMenu;
