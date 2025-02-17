import React, { useState, useEffect, useRef } from 'react';
import data from '...@/app/data/menu.json';
import EmptyCart from './EmptyCart';

const MenuItems = ({ activeCategory, setActiveCategory }) => {
    const categoryRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
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
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeCategory, setActiveCategory]);

    return (
        <div className="flex max-w-5xl mx-auto relative">
            <div className="flex-1 w-full bg-white shadow-md px-4 sm:px-6 lg:px-8">
                {data.categories.map((category, index) => (
                    <div 
                        key={category.id} 
                        ref={el => categoryRefs.current[index] = el} 
                        className="my-2"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">{category.name}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {category.items.map((item) => (
                                <div key={item.id} className="group rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col bg-white dark:bg-gray-800">
                                    <div className="relative w-full">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-55 object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-4 bg-gray-100 flex-1 flex flex-col min-h-[200px]">
                                        <h1 className="text-md font-bold line-clamp-2 py-2 text-black dark:text-white">
                                            {item.name}
                                        </h1>
                                        <p className="text-gray-600 text-sm mt-1 line-clamp-2 min-h-[40px]">
                                            {item.description || ""}
                                        </p>
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

            {/* Empty Cart Section */}
            <div className="hidden lg:block sticky top-10 right-0 w-80 h-screen">
                <EmptyCart />
            </div>
        </div>
    );
};

export default MenuItems;