import React, {useState} from 'react';
import { Navbar,Footer } from '@/components';
import Link from 'next/link';

const Contact = () => {

  const [userPhone, setUserPhone]:any = useState("");
  const [userName, setUserName]:any = useState("");
  const [userMessage, setUserMessage]:any = useState("");


  const handleSubmit = (e:any) => {
    e.preventDefault();
    const userData = {userPhone, userName, userMessage};
    if(!userPhone.length || !userName.length || !userMessage.length) return alert("All the inforomations are required");
    if(userData.userPhone.length != 11)return alert("Please enter a valid Bangladeshi number to submit messages");
    return alert("Message recieved, We'll get back to you as soon as we can")
  }


  return (
    <>
    <div className="container mx-auto p-5 h-screen">
        <Navbar />
        <div className="mt-10 lg:m-0 flex justify-center items-center h-3/4 rounded-xl sm:bg-slate-200">
          <div className="lg:inline-block bg-slate-50 p-10 rounded-xl shadow-md shadow-slate-300 flex items-center justify-center">
            <form action="">
              <h2 className="text-blue-700 text-3xl font-semibold my-4">
                Contact Us
              </h2>
              <div className="flex flex-col">
                <div className="w-1/2 flex flex-col">
                  <label>Name</label>
                  <input
                    type="text"
                    className="border-2 border-gray-200 my-2 px-2 py-1 rounded-lg focus:outline-none w-80"
                    value={userName}
                    onChange={e=>setUserName(e.target.value)}
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="border-2 border-gray-200 my-2 px-2 py-1 rounded-lg focus:outline-none w-80"
                    value={userPhone}
                    onChange={e=>setUserPhone(e.target.value)}
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label>Message</label>
                  <textarea
                    rows={4}
                    cols={50}
                    className="border-2 border-gray-200 my-2 px-2 py-1 rounded-lg focus:outline-none w-80"
                    value={userMessage}
                    onChange={e=>setUserMessage(e.target.value)}
                  />
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:text-gray-900 rounded-lg py-2 px-7 text-gray-50 uppercase text-xl md:self-start my-4" onClick={handleSubmit}>Submit Message</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />

    </div>
    
    
    </>
  )
}

export default Contact;