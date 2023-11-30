import React, { useContext } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'

export default function AdminHome() {
const {user} = useContext(AuthContext)
const axiosSecure = useAxiosSecure()
const {data: stats} = useQuery(
 {
   queryKey:['admin-stats'],
   queryFn: async () => {
    const res = await axiosSecure.get('/admin-stats')
    return res.data;
   }
  }
)

  return (
    <div>
      <h2 className='text-3xl'>
        <span>
        Hi Welcome
        {user?.displayName ? user.displayName : 'Welcome Back'}
        </span>

        <div className="stats shadow">
  
  <div className="stat place-items-center">
    <div className="stat-title">Revenue</div>
    <div className="stat-value">{stats?.revenue}</div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value text-secondary">{stats.users}</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Menu Items</div>
    <div className="stat-value">{stats?.manu}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  <div className="stat place-items-center">
    <div className="stat-title">Total Menu</div>
    <div className="stat-value">{stats?.orders}</div>
  </div>
  
</div>

      </h2>
    </div>
  )
}
