import React from 'react'
import {Search, UserRound,ShoppingCart, Heart } from 'lucide-react'
import { useState } from 'react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
    <div className=" h-15 mx-auto">
    <div className='flex item-center gap-6 p-4 xs:block xs:item-center'>
        <div className='relative w-[125px]'> 
            <img src='https://cheezious.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmainLogo.c4a33b22.png&w=640&q=75'
              alt='logo-image' 
             className="w-full h-15 object-cover">
            </img>
        </div>
        <div className="relative w-[60vw]">
                <input
                    type="text"
                    placeholder="Find in Cheezious"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-[50vw] border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2 text-gray-400" size={20} />
            </div>
        </div>
    </div>
     
     
     </>
   
  )
}

export default Navbar