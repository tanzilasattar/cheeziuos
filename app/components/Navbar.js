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
      <button className='relative '> 
        <Menu className='text-orange-600' size={28}></Menu>
      </button>
      </div>
        <div className='relative w-[125px]'> 
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
                    className="w-[50vw] bg-gray-200 rounded-lg py-2 pl-10 pr-4 focus:outline-none "
                />
                <Search className="absolute left-3 top-2 text-gray-400" size={20} />
            </div>
            <div className='relative w-[10vw] ml-9'>
              <input type='text'
              placeholder='Enter the Delivery'
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              className='w-full border border-gray-300 rounded-lg py-1 focus:outline-none'>
              </input>
              <ChevronRight className='absolute right-0 top-3 text-gray-400'  size={15}></ChevronRight>
              
            </div>
        </div>
    </div>
     
     
     </>
   
  )
}

export default Navbar