"use client"
import { useState } from 'react';
import CategoryTabs from './categories';
import MenuItems from './MenuItems';
import Navbar from './Navbar';
import EmptyCart from './EmptyCart';

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState(1);
    const [cartEmpty] = useState(true);

    return (
        <div className="min-h-screen bg-white">
            {/* Fixed Navbar - Always at top */}
            <div className="bg-white fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

            {/* Fixed Category Bar - Below Navbar */}
            <div className="fixed top-16 left-0 right-0 z-40">
                <CategoryTabs 
                    activeCategory={activeCategory} 
                    setActiveCategory={setActiveCategory}
                />
            </div>

            {/* Scrollable Content - Adjusted with top padding */}
            <div className="pt-28">
                <div className="flex">
                    <div className="flex-grow">
                        <MenuItems 
                            activeCategory={activeCategory} 
                            setActiveCategory={setActiveCategory} 
                        />
                    </div>
                    {cartEmpty && (
                         <div className="hidden bg-white lg:block sticky pt-10 top-36 right-24 w-70 h-screen">
                                  <EmptyCart />
                                </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuPage;