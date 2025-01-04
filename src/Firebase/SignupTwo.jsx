import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import signUpImage from '../assets/others/authentication1.png'
import useAxiosPublic from '../Pages/Shared/Custom/useAxiosPublic'
import GoogleLogin from '../Pages/Shared/GoogleLogin/GoogleLogin'
import useAuth from './useAuth'

function SignupTwo() {
  const axiosPublic = useAxiosPublic()
const navigate = useNavigate()
    const { setUser , createUser , updateUserProfile} = useAuth()

    const {
        register,
        handleSubmit,
        watch,
        reset ,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {

        const name = data.name
        const photoUrl = data.photoUrl
        createUser(data.email , data.password)
        .then(res => {
       updateUserProfile(name , photoUrl)
            .then(() => {
               const userInfo = {
                name : data.name,
                email : data.email
               }
               axiosPublic.post ('/users' , userInfo)
               .then(res => {
                if(res.data.insertedId) {
                  const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                  });
                }
               })

            })
            .catch(error => {
                console.log('error from update profile ->' , error)
            })
            setUser({
                ...res.user,
              })
            console.log(res.user)
           
              navigate('/')
        })
        reset()
      }
    
      console.log(watch("example"))

  return (
    <div className="grid lg:grid-cols-2 justify-center items-center  bg-registerBg bg-cover bg-center lg:px-1 xl:px-64 font-cardFont">
        <Helmet>
            <title>SignUp | Black Castel</title>
        </Helmet>
    <div>
      <img src={signUpImage} alt="" />
    </div>
    <div className="border-2 rounded-xl shadow-2xl md:w-[500px] lg:my-24 mx-auto p-4 m-2 md:p-10 backdrop-blur-3xl">
  
   <h1 className="text-center font-semibold  text-white/90 text-3xl">Register Now</h1>
  <form onSubmit={handleSubmit(onSubmit)} className="font-semibold text-gray-600">
    <label className="form-control w-full ">
      <div className="label">
        <span className="label-text text-white/90">Name</span>
      </div>
      <input
        type="text"
        {...register("name" , { required: true })}
        name="name"
        placeholder="Name"
        className="input input-bordered w-full "
        
      />
      {errors.name && <span className='text-red-500 my-1'>This field is required</span>}
    </label>
    <label className="form-control w-full ">
      <div className="label">
        <span className="label-text text-white/90">Photo Url</span>
      </div>
      <input
        type="url"
        name="photoUrl"
        {...register("photoUrl" , { required: true })}
        placeholder="Photo Url"
        className="input input-bordered w-full "
        
      />
      {errors.photoUrl && <span className='text-red-500 my-1'>This field is required</span>}
    </label>
    <label className="form-control w-full ">
      <div className="label">
        <span className="label-text text-white/90">Email</span>
      </div>
      <input
        type="email"
        {...register("email"  , { required: true })}
        name="email"
        placeholder="Email"
        className="input input-bordered w-full "
   
      />
      {errors.email && <span className='text-red-500 my-1'>This field is required</span>}
    </label>
    <label className="form-control w-full ">
      <div className="label">
        <span className="label-text text-white/90">Password</span>
      </div>
      <input
        type="password"
        {...register("password"  , { required: true , minLength: 6, maxLength: 20 , pattern : /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/
    } )}
        name="password"
        placeholder="Password"
        className="input input-bordered w-full "
     
      />
      {errors.password?.type === 'required' && <span className='text-red-500 my-1'>This field is required</span>}
      {errors.password?.type === 'maxLength' && <span className='text-red-500 my-1'>Password can only 20 charecters</span>}
      {errors.password?.type === 'minLength' && <span className='text-red-500 my-1'>Password Must be at least 6 charecters</span>}
      {errors.password?.type === 'pattern' && <span className='text-red-500 my-1'>Password Must be at least 1 UpperCase Letter and 1 LowerCase Letter and 1 Number </span>}
    </label>
    <input
      type="submit"
      value="Register"
      className="btn w-full bg-blue-500 my-5 text-white font-semibold"
    />
  </form>
  {/* <h1 className='my-2 text-red-600 mx-auto text-lg'>{errorInvalid} </h1> */}
  <GoogleLogin/>
  <h1 className="my-10 font-semibold text-xl">
    Already Have an account  ?{" "}
    <Link className="text-red-600 underline" to="/login">
      Login
    </Link>{" "}
  </h1>
</div>
  </div>
  )
}

export default SignupTwo
