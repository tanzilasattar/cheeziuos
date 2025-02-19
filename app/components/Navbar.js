import React from 'react'
import {Search, UserRound,Menu, MapPin, ChevronRight } from 'lucide-react'
import { useState } from 'react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              className='w-full border border-gray-300 rounded-lg py-1 text-lg px-6 focus:outline-none'>
              </input>
              <img src='https://cheezious.com/_next/static/media/pin.1d35bccd.svg' alt='navigation-arrow' className='absolute left-0 pl-1 top-3 h-18 w-18'/>
              <ChevronRight className='absolute right-0 top-3 text-gray-400'  size={15}></ChevronRight>
              
            </div>
        </div>
    </div>
     
     
     </>
   
  )
}

export default Navbar