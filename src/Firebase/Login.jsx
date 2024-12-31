import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import loginImage from "../assets/others/authentication2.png";
import { AuthContext } from "./AuthProvider";

function Login() {
    const {loginUser , setUser} = useContext(AuthContext)
const [disabled , setDisabled] = useState(true)
    const captchaRef = useRef(null)
      // captcha useEffect
      useEffect(() => {
        loadCaptchaEnginge(6);
      }, []);

    //   login form handler
  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const userDetails = { email, password };
    console.log(userDetails);

    // firebase sign in user 

    loginUser(email , password)
    .then(res => {
        setUser(res.user)
    })
    .catch(error => {
        console.log('error from Login --> ' , error)
        alert('Login Faild')
    })
  };

  const handleCaptcha = ()=>{
const cValue = captchaRef.current.value
console.log(cValue)
if(validateCaptcha(cValue)) {
    setDisabled(false)
}else{
    setDisabled(true)
}
  }
  return (
    <div className="grid lg:grid-cols-2  justify-center items-center  bg-loginBg bg-cover bg-center lg:px-1 xl:px-64 font-cardFont ">
      <div>
        <img src={loginImage} alt="" />
      </div>
      <div className="border-2 rounded-xl shadow-2xl md:w-[500px] lg:my-24 mx-auto p-4 m-2 md:p-10 backdrop-blur-3xl  w-full mb-10">
        <h1 className="text-center font-semibold my-5  text-3xl">
          <span className="text-black">Login Now</span>
        </h1>
        <form onSubmit={handleLogin} className="font-semibold text-gray-600">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-white">Email</span>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full "
              required
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-white">Password</span>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full "
              required
            />
          </label>
         <div>
         <label className="form-control w-full ">
            <div className="label">
              <LoadCanvasTemplate />
            </div>
            <input
              type="text"
              
              name="captcha"
              ref={captchaRef}
              placeholder="Type Captcha Here"
              className="input input-bordered w-full "
              required
            />
          </label>
          <button onClick={()=>handleCaptcha()} className="btn-outline btn-xl">Validate Captcha</button>
         </div>
          <input
            type="submit"
            disabled={disabled}
            value="Login"
            className="btn text-white w-full bg-[#ee4c1be7] mt-8"
          />
        </form>
        {/* <h1 className="my-3 text-red-600 mx-auto text-lg">{errorInvalid} </h1> */}
        {/* <button onClick={handleGoogleLogin} className="btn mt-5  bg-[#6dbd22de]">
        <IoLogoGoogleplus className="text-[#f5da3f] text-xl" /> Login With
        Google
      </button> */}
        <h1 className="my-10">
          New User ?{" "}
          <Link className="text-red-500 font-semibold underline" to="/signup">
            Signup
          </Link>{" "}
        </h1>
      </div>
    </div>
  );
}

export default Login;
