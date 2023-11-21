import React from 'react'
import SectionTitle from './../../../Components/SectionTitle/SectionTitle';
import { FaEdit, FaTrashAlt} from 'react-icons/fa';
import swal from 'sweetalert';
import axios from 'axios';
import useAdmin from '../../../Hooks/useAdmin';
import useMenu from './../../../Hooks/useMenu';

const ManageItems = () => {

const [isAdmin,isAdminLoading] = useAdmin()
    const [menu, loading,refetch] = useMenu()


    if(loading  || isAdminLoading){
    return (
        <div>Loading...</div>
    )
}

const handleDeleteItem = id => {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/menu/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data?.deletedCount > 0) {
              swal('Deleted!', 'Your file has been deleted.', 'success');
              refetch();
            } else {
              swal('Delete Request Failed!', 'No records deleted.', 'error');
            }
          })
          .catch((error) => {
            console.error('Delete Request Error:', error);
            swal('Delete Request Error!', 'An error occurred.', 'error');
          });
      } else {
        swal('Delete Request Cancelled!');
      }
    });
  };
  


// const handleUpdate = id => {

// }


if(!isAdmin){
    <div className='h-screen w-full flex justify-center items-center'> <p> Page Not Found</p></div>
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
            {menu.map(item => (
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
                    onClick={() => handleUpdate(item?._id)}
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
