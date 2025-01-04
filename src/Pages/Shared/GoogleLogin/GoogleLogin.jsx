import React from "react";
import { IoLogoGoogleplus } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Firebase/useAuth";
import useAxiosPublic from "../Custom/useAxiosPublic";

function GoogleLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const { setUser, loginWithGoogle } = useAuth();
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log(res.data);
           
         
          })
          .catch((error) => {
            console.log("error from google login post req", error);
          });
          setUser({
            ...res.user,
          });
          Swal.fire("Login successfull");
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log("err from google login", err);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleLogin} className="btn mt-5  bg-[#6dbd22de]">
        <IoLogoGoogleplus className="text-[#37e727] text-xl" /> Login With
        Google
      </button>
    </div>
  );
}

export default GoogleLogin;
