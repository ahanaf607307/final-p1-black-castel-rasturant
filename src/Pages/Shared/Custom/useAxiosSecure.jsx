import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../Firebase/useAuth'
export const axiosSecure = axios.create({
    baseURL : import.meta.env.VITE_URL,
    withCredentials : true,
})

function useAxiosSecure() {

const {logOutUser} = useAuth()
const navigate = useNavigate()
 useEffect(() => {

  axiosSecure.interceptors.response.use(res => {
    return res
  }, async (error) => {
    if(error.response.status === 401 || error.response.status === 403) {
      logOutUser()
      navigate('/login')
    }
  })

 } , [logOutUser , navigate])


  return axiosSecure 
}

export default useAxiosSecure
