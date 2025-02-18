"use client"
import { useRef,useEffect  } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import data from '...@/app/data/menu.json'

const CategoryTabs = ({ activeCategory, setActiveCategory }) => {
    const scrollRef = useRef(null);
    const buttonRefs = useRef({});

    // Scroll Left Function
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 200; // Adjust for smooth scrolling
        }
    };

    // Scroll Right Function
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 200; // Adjust for smooth scrolling
        }
    };
    // Auto scroll active category into view
    useEffect(() => {
        if (scrollRef.current && buttonRefs.current[activeCategory]) {
            const container = scrollRef.current;
            const button = buttonRefs.current[activeCategory];
            
            // Get container and button positions
            const containerRect = container.getBoundingClientRect();
            const buttonRect = button.getBoundingClientRect();

            // Calculate if button is outside visible area
            const isButtonOutsideLeft = buttonRect.left < containerRect.left;
            const isButtonOutsideRight = buttonRect.right > containerRect.right;

            if (isButtonOutsideLeft) {
                // Scroll button into view from left
                const scrollAmount = buttonRect.left - containerRect.left;
                container.scrollBy({ left: scrollAmount - 16, behavior: 'smooth' });
            } else if (isButtonOutsideRight) {
                // Scroll button into view from right
                const scrollAmount = buttonRect.right - containerRect.right;
                container.scrollBy({ left: scrollAmount + 16, behavior: 'smooth' });
            }
        }
    }, [activeCategory]);

    return (
        <div className="sticky top-20 z-10 bg-white shadow-md">
            <div className="max-w-[80vw] flex h-15 items-center p-4 mx-auto bg-gray-200 shadow-md">
                
                {/* Scroll Left Button */}
                <button onClick={scrollLeft} className="flex items-center justify-center w-6 h-6 border-2 border-red-500 text-red-500 rounded-full text-gray-500 transition-colors hover:bg-red-500 hover:text-white">
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Scrollable Category List */}
                <div 
                    ref={scrollRef}
                    className="flex-1 flex overflow-x-auto scrollbar-hide gap-2 p-2 w-[600px]" 
                >
                    {data.categories.map((category) => (
                        <button
                            key={category.id}
                            ref={el => buttonRefs.current[category.id] = el}
                            onClick={() => setActiveCategory(category.id)}
                            className={`
                                whitespace-nowrap px-4 py-2 rounded-md transition-colors
                                ${activeCategory === category.id 
                                    ? 'bg-yellow-400 text-black font-medium' 
                                    : 'bg-gray-100'
                                }
                            `}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Scroll Right Button */}
                <button onClick={scrollRight} className="flex items-center justify-center w-6 h-6 border-2 border-red-500 text-red-500 rounded-full text-gray-500 transition-colors hover:bg-red-500 hover:text-white">
                    <ChevronRight className="w-6 h-6" />
                </button>

            </div>
        </div>
    )
};

export default CategoryTabs;
