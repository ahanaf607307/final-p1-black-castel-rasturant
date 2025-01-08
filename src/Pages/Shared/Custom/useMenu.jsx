import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic'

const  useMenu = () => {
const axiosPublic = useAxiosPublic()
    // const [menu , setMenu] = useState([])
    // useEffect(()=> {
    //     fetchData()
    // } , [])

    // const fetchData = async() => {
    //     const {data} = await axios.get('http://localhost:5000/menu') 
        
    //     setMenu(data)
    // }
  
    const {data : menu = [] , isPending : loading , refetch} = useQuery({
        queryKey : ['menu'] , 
        queryFn : async() => {
const {data} = await axiosPublic.get(`/menu`)
return data
        }
    })
return[menu , loading , refetch]

}
export default useMenu

