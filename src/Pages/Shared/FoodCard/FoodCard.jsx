import React, { useContext } from "react";
import { AuthContext } from "./../../../Provider/AuthProvider";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = (item) => {
  const { user } = useContext(AuthContext);
  const { image, title, subtitle, price, _id } = item;
  const navigate = useNavigate();




  const handleAddToCart = () => {
    const cartItem = {
      menuId: _id,
      email: user.email,
      name: user.displayName,
      image,
      price,
    };

    if (user === null) {
      swal({
        title: "Warning!",
        text: "You have to log in first!",
        icon: "warning",
      });
      console.log(item);
      navigate("/login");
    }
axios.post('http://localhost:5000/carts', cartItem)
.then(res => {
  console.log(res.data)
  if(res.data?.acknowledged){
    swal("Good job!", "Product Added to the Cart", "success");
  }
})
  };






  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-2">
      <figure>
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <p className="text-start text-slate-200 me-auto">Price :${price}</p>
        <h2 className="card-title">{title}</h2>
        <p>{subtitle}</p>
        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="btn bg-slate-200 text-black hover:bg-black hover:text-yellow-600 uppercase"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
