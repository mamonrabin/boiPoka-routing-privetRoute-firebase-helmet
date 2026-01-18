import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const LogIn = () => {
  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
  };
  return (
    
    <div className="py-20">
      <Helmet>
        <title>logo</title>
      </Helmet>

      <div>
        <form>
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
            value="Log In"
            className="border capitalize font-bold text-sm p-2 mt-4 hover:bg-blue-700 hover:text-white duration-300 cursor-pointer"
          />
        </form>

        <div>
            <Link to="/register" className="text-sm underline">New to boiPoka? Register Here</Link>
        </div>
      </div>

      <button
        onClick={handleGoogleSignIn}
        className="border capitalize font-bold text-sm p-2 mt-4 hover:bg-red-700 hover:text-white duration-300 cursor-pointer"
      >
        Login in with google
      </button>
    </div>
  );
};

export default LogIn;
