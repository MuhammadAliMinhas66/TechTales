import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    /* This is the parent div of full page */
    <div className="grid grid-cols-2 h-[100vh] bg-[#F7F4FA] overflow-hidden relative">
      {/* Gradient Mask */}
      <div className="absolute z-[-1] w-full h-[90px] gradient"></div>
      {/* Left portion -> Form */}
      <div className="h-full flex justify-center items-center">
        <div className="w-[54%] gap-5">
          <div>
            <h1>Welcome</h1>
            <h2 className="mt-1 font-semibold text-2xl">
              Login to Your Account
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-4 mt-4 mb-4">
            <div className="px-9 h-[45px] flex items-center bg-lightPurple rounded-[5px] cursor-pointer">
              <img
                className="w-[25px] aspect-square"
                src="./google.png"
                alt=""
              />
            </div>
            <div className="px-9 h-[45px] flex items-center bg-lightPurple rounded-[5px] cursor-pointer">
              <img
                className="w-[25px] aspect-square"
                src="./facebook.png"
                alt=""
              />
            </div>
          </div>

          {/* Alternative Option */}
          <div className="flex items-center gap-3 text-lightGray">
            {/* Left Line */}
            <div className="h-[1px] w-full bg-lightGray"></div>
            <p>OR</p>
            {/* Right Line */}
            <div className="h-[1px] w-full bg-lightGray"></div>
          </div>

          {/* Form */}
          <form className="w-full flex flex-col gap-4 mt-7">
            <input
              className="border-b-2 border-lightGray bg-lightPurple outline-none p-4 text-xl text-lightGray"
              type="email"
              name="email"
              id="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border-b-2 border-lightGray bg-lightPurple outline-none p-4 text-xl text-lightGray"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="self-end text-lightGray cursor-pointer">
              Forget Password?
            </p>
            <button
              className="p-3.5 text-xl bg-primary text-white hover:bg-primaryHover duration-200"
              type="submit"
            >
              Login
            </button>
            <p className="text-center text-lightGray">
              Don't have an account?{" "}
              <Link to="/signup" className="text-black cursor-pointer">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right portion -> image */}
      <div
        className="relative w-[90%] mx-auto my-4 ml-14"
        style={{
          background: 'url("./gallery1.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          {/* Mask */}
          <div className="h-full w-full absolute left-0 right-0 top-0 bottom-0 bg-black/80 z-1"></div>
          <div className="z-[100] absolute bottom-10 left-7 text-white">
            <h1 className="rammetto text-[50px] my-1 ">TechTales</h1>
            <p className="text-[17px] w-[440px] text-justify text-slate-300">
              Wanderlust Chronicles is a travel and lifestyle blog dedicated to
              inspiring and guiding to inspiring and guiding adventurers around
              the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
