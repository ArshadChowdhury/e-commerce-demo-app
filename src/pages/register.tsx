import React, {useState} from "react";
import { Navbar, Footer } from "@/components";
import Link from "next/link";

const Register = () => {

  const [userPhone, setUserPhone]:any = useState("");
  const [userPassword, setUserPassword]:any = useState("");
  const [userConfirmedPassword, setUserConfirmedPassword]:any = useState("");



  const handleSubmit = (e:any) => {
    e.preventDefault();
    const userData = {userPhone, userPassword,userConfirmedPassword };
    if(!userPhone.length || !userPassword.length || !userConfirmedPassword.length) return alert("All the inforomations are required");
    if(userData.userPhone.length != 11)return alert("Please enter a valid Bangladeshi number to sign up");
    if(userPassword !== userConfirmedPassword) return alert("Please make sure to enter same password in both fields");
  }
  


  return (
    <>
      <div className="container mx-auto p-5 h-screen">
        <Navbar />
        <div className="mt-10 lg:m-0 flex justify-center items-center h-3/4 rounded-xl sm:bg-slate-200">
          <div className="lg:inline-block bg-slate-50 p-10 rounded-xl shadow-md shadow-slate-300 flex items-center justify-center">
            <form action="">
              <h2 className="text-blue-700 text-3xl font-semibold my-4">
                Sign Up
              </h2>
              <div className="flex flex-col">
                <div className="w-1/2 flex flex-col">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    className="border-2 border-gray-200 my-2 px-2 py-1 rounded-lg focus:outline-none w-80"
                    value={userPhone}
                    onChange={e=>setUserPhone(e.target.value)}
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label>Password</label>
                  <input
                    type="text"
                    className="border-2 border-gray-200 my-2 px-2 py-1 rounded-lg focus:outline-none w-80"
                    value={userPassword}
                    onChange={e=>setUserPassword(e.target.value)}
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label>Confirm Password</label>
                  <input
                    type="text"
                    className="border-2 border-gray-200 my-2 px-2 py-1 rounded-lg focus:outline-none w-80"
                    value={userConfirmedPassword}
                    onChange={e=>setUserConfirmedPassword(e.target.value)}
                  />
                </div>
                <p className="text-sm">By registering you agree to our terms and services</p>
                <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:text-gray-900 rounded-lg py-2 px-7 text-gray-50 uppercase text-xl md:self-start my-4" onClick={handleSubmit}>Register</button>
                <p>Already a registered member? <Link href="/login" className="text-blue-700">Login Here</Link> </p>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Register;
