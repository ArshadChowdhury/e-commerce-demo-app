import React, { useState } from 'react';
import Image from 'next/image';

const Newsletter = () => {

  const [inputValue, setInputValue] = useState("");
  

  return (
    <>
    <div className='rounded-lg shadow-lg my-20 flex flex-row'>
      <div className='w-full lg:w-3/5 bg-gradient-to-r from-black to-purple-900 lg:from-black lg:via-purple-900 lg:to-transparent rounded-lg text-gray-100 p-12'>
        <div className='lg:w-1/2'>
          <h3 className='text-2xl font-extrabold mb-4'>Subscribe to get our offers first</h3>
          <p className='mb-4 leading-relaxed text-lg'>Want to hear from us when we have new offers ? Sign up for our newsletter and we will email you every time we have some new offers.</p>
          <div>
            <input type="email" placeholder='Enter your email address' className='bg-gray-600 text-gray-200 placeholder-gray-400 p-3 w-full rounded-lg focus:outline-none text-xl' value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={()=>alert("Thanks for subscribing to our newsletter.")} type='submit' className='bg-red-600 py-3 rounded-lg w-full my-2'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='lg:w-2/5 w-full lg:flex lg:flex-row hidden'>
        <Image src="/subscribe-banner.png" width="500" height="500" alt="Newsletter image" className='h-96 w-auto'/>
      </div>

    </div>

    
    </>
  )
}

export default Newsletter;