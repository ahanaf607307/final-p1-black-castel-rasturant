import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import useAxiosSecure from '../../Pages/Shared/Custom/useAxiosSecure'

function AllUsers() {
    const axiosSecure = useAxiosSecure()
    const {data} = useQuery({
        queryKey : ['user'],
        queryFn : async () => {
const res = await axiosSecure.get('/users')
return res.data
        }
    })

    const handleDeleteItem = (id) => {
        console.log(id)
    }
  return (
    <div>
      <h1 className='text-4xl font-semibold my-6'>All Users : {data.length}</h1>
       <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Role </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            
              {data.map((users , index) =><tr>
                  <th>{index + 1}</th>
                  
              <td>{users?.name}</td>
              <td>{users?.email}</td>
              <td><button className='btn'><FaEdit className='text-xl'></FaEdit></button></td>
              <td><button className='btn btn-md ' onClick={()=>handleDeleteItem(users?._id)}>
                <FaTrash className='text-red-600 cursor-pointer'></FaTrash>
                </button></td>
                   </tr>)}
            
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUsers
