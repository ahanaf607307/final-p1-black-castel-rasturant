import { useQuery } from "@tanstack/react-query"
import useAuth from "../../../Firebase/useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const {user } = useAuth()
  const {refetch , data : cart = []} = useQuery({
    queryKey : ['carts' , user?.email] , 
    queryFn : async () => {
        const res = await axiosSecure.get(`/carts?email=${user.email}`)
        return res.data
    }
  })
  return [cart , refetch]
}

export default useCart
