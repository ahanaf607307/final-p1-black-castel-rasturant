import { useQuery } from "@tanstack/react-query"
import useAuth from "../../../Firebase/useAuth"
import useAxiosPublic from "./useAxiosPublic"

const useCart = () => {
    // const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const {user } = useAuth()
  const {refetch , data : cart = []} = useQuery({
    queryKey : ['carts' , user?.email] , 
    queryFn : async () => {
        const res = await axiosPublic.get(`/carts?email=${user.email}`)
        return res.data
    }
  })
  return [cart , refetch]
}

export default useCart
