import axios from 'axios'
export const axiosSecure = axios.create({
    baseURL : `${import.meta.env.VITE_URL}`
})
function useAxiosSecure() {
  return axiosSecure 
}

export default useAxiosSecure
