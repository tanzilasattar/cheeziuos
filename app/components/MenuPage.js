// components/MenuPage.js
"use client"
import { useState } from 'react';
import CategoryTabs from './categories';
import MenuItems from './MenuItems';
// import EmptyCart from './EmptyCart';

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState(1);
    const [cartEmpty] = useState(true)

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <div className="flex-grow">
            <CategoryTabs 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory}
            />
            <MenuItems activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </div>
        {/* {cartEmpty && <EmptyCart />} */}
        </div>
        
    );
};

export default MenuPage;