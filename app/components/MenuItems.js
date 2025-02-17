"use client"
import React, { useState, useEffect, useRef } from 'react';
import { HeartIcon } from 'lucide-react'
import data from '...@/app/data/menu.json';
import EmptyCart from './EmptyCart';


const MenuItems = ({ activeCategory, setActiveCategory }) => {
    const categoryRefs = useRef([]);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let timeoutId;
        
        const handleScroll = () => {
            if (isScrolling) return;
            
            setIsScrolling(true);
            
            // Clear any existing timeout
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            let currentActiveCategory = activeCategory;

            categoryRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        currentActiveCategory = data.categories[index].id;
                    }
                }
            });

            if (currentActiveCategory !== activeCategory) {
                setActiveCategory(currentActiveCategory);
            }

            // Set a timeout to allow next scroll check
            timeoutId = setTimeout(() => {
                setIsScrolling(false);
            }, 150); // Throttle scroll events
        };

        // Add passive scroll listener for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [activeCategory, setActiveCategory, isScrolling]);

    return (
        <div className="flex max-w-5xl mx-auto relative">
            <div className="top-0 w-full bg-white shadow-md w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {data.categories.map((category, index) => (
                    <div 
                        key={category.id} 
                        ref={el => categoryRefs.current[index] = el} 
                        className="my-2"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">{category.name}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4 md:gap-6">
                            {category.items.map((item) => (
                                <div key={item.id} className="group rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col bg-white dark:bg-gray-800">
                                    <div className="relative w-full ">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                        <img 
                                            src="https://cheezious.com/_next/static/media/emptyHeart.0259b0f6.svg" 
                                            className="text-lg px-2 py-1 absolute top-2 right-2 bg-white-200 hover:fill-red-500 cursor-pointer"
                                        />
                                    </div>
                                    <div className="p-4 bg-gray-100 flex-1 flex flex-col min-h-[200px]">
                                        <div className="flex-1">
                                            <h1 className="text-md font-bold line-clamp-2 py-2 text-black dark:text-white">
                                                {item.name}
                                            </h1>
                                            <p className="text-gray-600 text-sm mt-1 line-clamp-2 min-h-[40px]">
                                                {item.description || ""}
                                            </p>
                                        </div>
                                        <div className="mt-auto">
                                            <div className="flex items-center mt-4 gap-3">
                                                <span className="text-red-600 font-bold">
                                                    Rs. {item.price}
                                                </span>
                                                {item.isStartingPrice && (
                                                    <span className="text-xs px-2 py-1 bg-orange-700 text-white rounded-full">
                                                        Starting Price
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex justify-center">
                                                <button 
                                                    className="bg-white mt-4 text-black px-4 py-1.5 rounded-md 
                                                             hover:bg-orange-600 hover:text-white transition-colors duration-200
                                                             text-sm font-medium w-full"
                                                >
                                                    + ADD TO CART
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden lg:block sticky top-10 right-0 w-80 h-screen">
                <EmptyCart />
            </div>
        </div>
    );
};

export default MenuItems;