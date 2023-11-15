import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCart = () => {
const {user} = useContext(AuthContext)

  const axiosSecure = useAxiosSecure();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["AddtoCart", user?.email],
    queryFn: async () => {
        const response = await axiosSecure.get(`/carts?email=${user?.email}`);
        return response.data
      },
  });

  return [cart , refetch];

};

export default useCart;
