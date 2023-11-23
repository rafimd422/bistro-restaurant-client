import React, { useContext } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider'

export default function UserHome() {
const {user} = useContext(AuthContext)

  return (
    <div>
      <h2 className='text-3xl'>
        <span>
        Hi Welcome
        {user?.displayName ? user.displayName : 'Welcome Back'}
        </span>
      </h2>
    </div>
  )
}
