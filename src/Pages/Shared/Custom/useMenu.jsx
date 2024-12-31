import axios from 'axios'
import { useEffect, useState } from 'react'

const  useMenu = () => {

    const [menu , setMenu] = useState([])
    useEffect(()=> {
        fetchData()
    } , [])

    const fetchData = async() => {
        const {data} = await axios.get('http://localhost:5000/menu') 
        
        setMenu(data)
    }
  return {menu}
}
export default useMenu

