import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { FaTrashAlt } from 'react-icons/fa'
import swal from 'sweetalert'
import { FaUsers } from 'react-icons/fa';

const AllUsers = () => {

const axiosSecure = useAxiosSecure()

const usersData = async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
}
const {data, refetch, isPending} = useQuery({
    queryKey:['users'],
    queryFn: usersData
})

if(isPending){
    return <div className="h-screen w-full flex justify-center items-center">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  }

const handleDeleteUser = id => {
   axiosSecure.delete(`/users/${id}`)
   .then(res => {
    console.log(res.data)
    if(res.data?.deletedCount > 0){
        swal("Deleted!", "The user has been deleted.", "success");
        refetch();
      }
   })
    .catch((error) => {
    console.error("Delete request error:", error);
    swal("Delete Request Failed!", "error", "error");
  });
}



  return (
    <div className='flex flex-col items-center py-8'>
      <div className="flex justify-evenly gap-8 my-4">
<h2 className='text-3xl'>All Users</h2>
<h2 className='text-3xl'>Total Users: {data.length}</h2>
      </div>



      <div className="overflow-x-auto">
  <table className="table md:table-sm table-xs md:w-full">
    <thead>
      <tr>
        <th>s/l</th> 
        <th>Name</th> 
        <th>Email</th> 
        <th>Role</th> 
        <th>Action</th>
      </tr>
    </thead> 
    <tbody>

{data.map((users , idx) => <tr key={idx}>
        <th>{idx + 1}</th> 
        <td>{users.name}</td> 
        <td>{users.email}</td> 
        <td className='cursor-pointer bg-orange-500' onClick={()=> handleDeleteUser(users._id)} ><FaUsers className='mx-auto text-white md:text-lg' /></td> 
        <td className='cursor-pointer ' onClick={()=> handleDeleteUser(users._id)} ><FaTrashAlt className='mx-auto text-red-500 md:text-lg' /></td> 
      </tr>)}
    </tbody> 
  </table>
</div>




    </div>
  )
}

export default AllUsers
