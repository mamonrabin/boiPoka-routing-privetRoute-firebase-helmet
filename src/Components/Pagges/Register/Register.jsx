import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../../Providers/AuthProvider";

const Register = () => {


    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'


     const {createUser,signInWithGoogle} = useContext(AuthContext)
    const handelSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
        .then(result =>{
            const startUser = result.user
            console.log(startUser)
            navigate(from, {replace:true})
        })
        .catch(error =>{
            console.log(error)
        })
    }


     const handleGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
            const googleUser = result.user
            console.log(googleUser)
            navigate(from, {replace:true})
        })
    }
  return (
    <div className="py-20">
      <h2>place Register</h2>

      <div>
        <form onSubmit={handelSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border p-2 m-2"
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            className="border p-2 m-2"
          />
          <br />
          <input
            type="submit"
            value="Register"
            className="border capitalize font-bold text-sm p-2 mt-4 hover:bg-blue-700 hover:text-white duration-300 cursor-pointer"
          />
        </form>

        <div>
          <Link to="/login" className="text-sm underline">
            Login
          </Link>
        </div>
      </div>

      <button 
       onClick={handleGoogle}
      className="border capitalize font-bold text-sm p-2 mt-4 hover:bg-red-700 hover:text-white duration-300 cursor-pointer">
        Register in with google
      </button>
    </div>
  );
};

export default Register;
