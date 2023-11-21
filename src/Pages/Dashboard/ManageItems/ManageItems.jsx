import React from 'react'
import SectionTitle from './../../../Components/SectionTitle/SectionTitle';
import useMenu from './../../../Hooks/useMenu';
import { FaEdit, FaTrashAlt, FaUpload } from 'react-icons/fa';

const ManageItems = () => {
    const [menu] = useMenu()

const handleDeleteItem = id => {

}
const handleUpdate = id => {

}


  return (
    <div className='py-8'>
      <SectionTitle heading={'Manage All Items'} subHeading={'Hurry Up'} />

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {menu.map((item) => (
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
                    onClick={() => handleDeleteItem(item._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrashAlt className="text-red-700 text-xl" />
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaEdit className="text-xl" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>


    </div>
  )
}

export default ManageItems
