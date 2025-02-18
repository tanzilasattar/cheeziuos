"use client"
import React, { useState, useEffect, useRef } from "react";
import data from "...@/app/data/menu.json";
import EmptyCart from "./EmptyCart";

const MenuItems = ({ activeCategory, setActiveCategory }) => {
  const categoryRefs = useRef([]);
  const [categories] = useState(data.categories);

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveCategory = activeCategory;

      categoryRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            currentActiveCategory = data.categories[index].id;
          }
        }
      });

      if (currentActiveCategory !== activeCategory) {
        setActiveCategory(currentActiveCategory);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeCategory, setActiveCategory]);

  return (
    <div className="max-w-screen bg-white mx-auto ">
      
        <div className="flex-1 mx-auto max-w-screen-xl">
          {categories.map((category, index) => (
            <div
              key={category.id}
              ref={(el) => (categoryRefs.current[index] = el)}
              className="my-2 flex flex-col w-full sm:w-full md:w-[80vw] lg:w-[70vw] mx-auto"
            >
              <h2 className="text-2xl mt-16 ms-[19vw] sm:ms-[7vw] md:ms-[6vw] lg:ms-[6vw] xl:ms-[6vw] 2xl:ms-[7vw] font-bold mb-4">
                {category.name}
              </h2>
              <div className="flex flex-wrap ms-[19vw] sm:ms-[9vw] md:ms-[6vw] lg:ms-[6vw] xl:ms-[6vw] 2xl:ms-[7vw] items-center w-[58vw] gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-wrap w-[250px] bg-white"
                  >
                    <div className="relative w-[250px]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-56 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 bg-gray-100 flex-1 flex flex-col min-h-[200px]">
                      <h1 className="text-md font-bold line-clamp-2 py-2">
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
                          <button className="bg-white mt-4 text-black px-4 py-1.5 rounded-md hover:bg-orange-600 hover:text-white transition-colors duration-200 text-sm font-medium w-full">
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
        {/* <div className="hidden bg-white lg:block sticky top-32 right-24 w-70 h-screen">
          <EmptyCart />
        </div> */}
    
    </div>
  );
};

export default MenuItems;