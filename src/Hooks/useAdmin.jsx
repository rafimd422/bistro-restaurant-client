import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import useAxiosSecure from './useAxiosSecure'

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
  const {data: isAdmin , isPending: isAdminLoading} = useQuery({queryKey:[user?.email],
  queryFn: async () =>{
    const res = await axiosSecure.get(`/users/admin/${user?.email}`)
    return res.data?.admin
  },
  enabled:!loading
})
return [isAdmin,isAdminLoading]
}

export default useAdmin
