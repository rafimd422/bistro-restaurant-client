import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'

const PaymentHistory = () => {
const { user } = useContext(AuthContext)
const axiosSecure = useAxiosSecure()

const { data:payment, isLoading } = useQuery({
    queryKey: ['payments', user?.email],
    queryFn: async() =>{
        const res = await axiosSecure.get(`/payments/${user.email}`)
        return res.data;
    }
})
if(isLoading){
    return <p>Loading...</p>
}

  return (
    <div>
      <h2 className="text-3xl">
        Total Payments: {payment.length}
      </h2>


      <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
            <th>Price</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {payment.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center gap-3">
                  </div>
                </td>
                <td>{item.price}</td>
                <td>{item.transactionId}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>



    </div>
  )
}

export default PaymentHistory
