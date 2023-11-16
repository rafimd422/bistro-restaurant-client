import useCart from "./../../../Hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
console.log(cart)
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
   {
    cart.map(item => <tr key={item._id}>
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
      <td>
{item.name}
      </td>
      <td>${item.price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Details</button>
      </th>
    </tr>)
   }

          </tbody>
          {/* foot */}

        </table>
      </div>
    </div>
  );
};

export default Cart;
