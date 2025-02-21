import React from 'react'
import {Search, UserRound,Menu, MapPin, ChevronRight, X } from 'lucide-react'
import { useState } from 'react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const handleDeliveryFocus = () => {
    setIsDrawerOpen(true);
  };
  return (
    <>
    <div className=" h-15 border border-l-gray-300 mx-auto">
    <div className='flex item-center p-4 xs:block xs:item-center'>
      <div>
      <button className='relative w-[30px] mr-2 '> 
        {/* <Menu className='text-orange-600' size={28}></Menu> */}
        <img src='https://cheezious.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstack.54881ee4.png&w=128&q=75' alt='icon menu' className=' w-full h-10 object-cover'/>
      </button>
      </div>
        <div className='relative w-[140px]'> 
            <img src='https://cheezious.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmainLogo.c4a33b22.png&w=640&q=75'
              alt='logo-image' 
             className="w-full h-15 object-cover">
            </img>
        </div>
        <div className="relative w-[50vw] ml-24">
                <input
                    type="text"
                    placeholder="Find in Cheezious"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-[50vw] bg-gray-200 rounded-lg py-2 pl-10 pr-4  focus:outline-none "
                />
                <Search className="absolute left-3 top-2 text-gray-400" size={20} />
            </div>
            <div className='relative w-[11vw] ml-4'>
              <input type='text'
              placeholder='Enter the Delivery'
              onFocus={handleDeliveryFocus}
              value={searchQuery}
              // onChange={(e)=>setSearchQuery(e.target.value)}
              className='w-full border border-gray-300 rounded-lg py-1 text-lg px-6 focus:outline-none'>
              </input>
              <img src='https://cheezious.com/_next/static/media/pin.1d35bccd.svg' alt='navigation-arrow' className='absolute left-0 pl-1 top-3 h-18 w-18'/>
              <ChevronRight className='absolute right-0 top-3 text-gray-400'  size={15}></ChevronRight>
              
            </div>
            <div className='flex relative'>
              <button className='bg-yellow-300 h-10 w-28 ml-4 rounded-lg py-1'>
                <img src='https://cheezious.com/_next/static/media/cart.7ceb24dc.svg' alt='cart' className='absolute left-6 pl-3 top-3'>
                 </img>
                 <span className='text-sm pl-4 font-bold'> CART</span>
              </button>
            </div>
            <div className='relative flex '>
            <button className='bg-yellow-300 h-10 w-28 ml-4 rounded-lg py-1'>
                <img src='https://cheezious.com/_next/static/media/user.5fb6c6b7.svg' alt='cart' className='absolute left-6 pl-3 top-3'>
                 </img>
                 <span className='text-sm pl-4 font-bold'>LOGIN</span>
              </button>
            </div>
        </div>
    </div>
    {/* drawer open on click the input enter the delivery */}
    {isDrawerOpen &&(
    <div className='bg-black inset-0 bg-opacity-50 z-40 fixed flex justify-center items-center'>
      <div className='bg-white justify-between max-w-2xl mx-auto p-4 z-50 fixed inset-x-0 shadow-lg'>

        <div className='flex justify-between items-center'>
          <h2>Enter the Address</h2>
          <button onClick={()=>setIsDrawerOpen(false) } className='p-2 rounded-full bg-red-500'>
            <X size={20}></X>

          </button>

        </div>
        <p className='text-gray-400 text-sm mb-4'>
        Please allow location for free delivery and good food experience.
        </p>
       
        <div className="mt-4 h-[300px] bg-gray-100 rounded-lg">
              {/* Map placeholder - You would integrate your actual map here */}
              <div className="w-full relative h-full justify-center flex text-gray-500">
                Map View
                <div className='absolute mt-8 w-[28vw] '>
          <input className='w-full border border-gray-300 rounded-lg py-2 px-2 ' type='text' placeholder='Search for area,street name .....'>
          </input>
          <Search className='absolute right-0 top-2 text-gray-400'></Search>
        </div>
              </div>
              
            </div>
      </div>
    </div>
    
    )}
     </>
   
  )
}

export default Navbar