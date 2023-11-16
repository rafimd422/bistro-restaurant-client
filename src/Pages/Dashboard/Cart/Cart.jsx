import { FaTrash } from "react-icons/fa";
import useCart from "./../../../Hooks/useCart";
import swal from "sweetalert";
import axios from "axios";

const Cart = () => {
  const [cart, refetch] = useCart();

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/carts/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data?.deletedCount > 0) {
              swal("Deleted!", "Your file has been deleted.", "success");
              refetch();
            } else {
              swal("Delete Request Failed!", "No records deleted.", "error");
            }
          })
          .catch((error) => {
            console.error("Delete Request Error:", error);
            swal("Delete Request Error!", "An error occurred.", "error");
          });
      } else {
        swal("Delete Request Cancelled!");
      }
    });
  };

  return (
    <div className="w-full">
      <div className="flex justify-evenly my-12">
        <h2 className="text-4xl">Items: {cart.length}</h2>
        <h2 className="text-4xl">Total Price: {cart.length}</h2>
        <button className="btn">Pay</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {cart.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrash className="text-xl" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Cart;
