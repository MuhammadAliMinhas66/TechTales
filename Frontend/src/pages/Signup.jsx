import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FName, " ", LName, " ", email, " ", password, " ", CPassword);
  };

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
            <h2 className="mt-1 font-semibold text-2xl">Create Your Account</h2>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-4 mt-7"
          >
            {/* First and last name */}
            <div className="flex items-center gap-[13px]">
              <input
                className="border-b-2 w-full border-lightGray bg-lightPurple outline-none p-3.5 text-xl text-lightGray"
                type="text"
                name="fName"
                id="fName"
                placeholder="First Name"
                value={FName}
                onChange={(e) => setFName(e.target.value)}
              />
              <input
                className="border-b-2 w-full border-lightGray bg-lightPurple outline-none p-3.5 text-xl text-lightGray"
                type="text"
                name="lName"
                id="lName"
                placeholder="Last Name"
                value={LName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <input
              className="border-b-2 border-lightGray bg-lightPurple outline-none p-3.5 text-xl text-lightGray"
              type="email"
              name="email"
              id="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border-b-2 border-lightGray bg-lightPurple outline-none p-3.5 text-xl text-lightGray"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="border-b-2 border-lightGray bg-lightPurple outline-none p-3.5 text-xl text-lightGray"
              type="password"
              name="cPassword"
              id="cPassword"
              placeholder="Confirm Password"
              value={CPassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
            <button
              className="p-3.5 mt-3 text-xl bg-primary text-white hover:bg-primaryHover duration-200"
              type="submit"
            >
              Sign Up
            </button>
            <p className="text-center text-lightGray">
              Already have an account?{" "}
              <Link to="/login" className="text-black cursor-pointer">
                Login
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

export default Signup;
