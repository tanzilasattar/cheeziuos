import React from 'react'

const EmptyCart = () => (
    <div className="sticky top-28 right-0 w-80 h-[68vh] justify-center bg-gray-100 rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center">
            <div className="text-gray-300 mb-4">
                <div className="text-6xl">
                    <img src='https://cheezious.com/_next/static/media/emptycart.e7858caa.svg'
                    className='object-cover'>
                    </img>
                    </div>
            </div>
            <h3 className="text-xl font-bold mb-2">YOUR CART IS EMPTY</h3>
            <p className="text-gray-600 text-center text-sm">
                Go ahead and explore top categories.
            </p>
        </div>
    </div>
)

export default EmptyCart