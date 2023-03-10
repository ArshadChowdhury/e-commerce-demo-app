import { Navbar } from '@/components'
import React from 'react'

const error = () => {
  return (
    <>
    <div className='container mx-auto p-5 h-screen'>
      <Navbar />
      <div className="mt-10 lg:m-0 flex justify-center items-center h-3/4 rounded-xl sm:bg-slate-200">
         {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1>Error 404, This route doesn't exist in our Shop</h1>
      </div>


    </div>



    </>
  )
}

export default error