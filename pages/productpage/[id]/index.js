
import React from "react";
import { useRouter } from "next/router";


const HerroCategory = () => {

  const router = useRouter();

  const handleCategoryClick = () => {
    // Replace "categourypage" with the actual route you want to navigate to
    router.push(`/productss`)}
  

  return (
    
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-8 mb-8 px-4 md:px-8 pt-8">
      {/* Category Item 1 */}
      <div
        className="relative group transition-transform duration-300 transform-gpu hover:scale-105"
        onClick={handleCategoryClick}
      >
        <a href="#" className="block">
          <div className="rounded-full overflow-hidden w-16 h-16 md:w-20 md:h-20 shadow-xl mx-auto">
            <img
              src="https://res.cloudinary.com/dcpte972l/image/upload/v1691409328/2123644_khielq.jpg"
              className="w-full h-full object-cover"
              alt="Category"
            />
          </div>
        </a>
        <span className="block mt-2 text-center text-sm md:text-base">
          Electronics
        </span>
      </div>
      {/* Category Item 2 */}
      <div className="relative group transition-transform duration-300 transform-gpu hover:scale-105">
        <a href="#" className="block">
          <div className="rounded-full overflow-hidden w-16 h-16 md:w-20 md:h-20 shadow-xl mx-auto">
            <img
              src="https://res.cloudinary.com/dcpte972l/image/upload/v1691409328/2123644_khielq.jpg"
              className="w-full h-full object-cover"
              alt="Category"
            />
          </div>
        </a>
        <span className="block mt-2 text-center text-sm md:text-base">Electronics</span>
      </div>

      {/* Repeat for other items */}
      <div
        className="relative group transition-transform duration-300 transform-gpu hover:scale-105"
        onClick={handleCategoryClick}
      >
        <a href="#" className="block">
          <div className="rounded-full overflow-hidden w-16 h-16 md:w-20 md:h-20 shadow-xl mx-auto">
            <img
              src="https://res.cloudinary.com/dcpte972l/image/upload/v1691409328/2123644_khielq.jpg"
              className="w-full h-full object-cover"
              alt="Category"
            />
          </div>
        </a>
        <span className="block mt-2 text-center text-sm md:text-base">
          Electronics
        </span>
      </div>
      <div
        className="relative group transition-transform duration-300 transform-gpu hover:scale-105"
        onClick={handleCategoryClick}
      >
        <a href="#" className="block">
          <div className="rounded-full overflow-hidden w-16 h-16 md:w-20 md:h-20 shadow-xl mx-auto">
            <img
              src="https://res.cloudinary.com/dcpte972l/image/upload/v1691409328/2123644_khielq.jpg"
              className="w-full h-full object-cover"
              alt="Category"
            />
          </div>
        </a>
        <span className="block mt-2 text-center text-sm md:text-base">
          Electronics
        </span>
      </div>
      <div
        className="relative group transition-transform duration-300 transform-gpu hover:scale-105"
        onClick={handleCategoryClick}
      >
        <a href="#" className="block">
          <div className="rounded-full overflow-hidden w-16 h-16 md:w-20 md:h-20 shadow-xl mx-auto">
            <img
              src="https://res.cloudinary.com/dcpte972l/image/upload/v1691409328/2123644_khielq.jpg"
              className="w-full h-full object-cover"
              alt="Category"
            />
          </div>
        </a>
        <span className="block mt-2 text-center text-sm md:text-base">
          Electronics
        </span>
      </div>
      <div
        className="relative group transition-transform duration-300 transform-gpu hover:scale-105"
        onClick={handleCategoryClick}
      >
        <a href="#" className="block">
          <div className="rounded-full overflow-hidden w-16 h-16 md:w-20 md:h-20 shadow-xl mx-auto">
            <img
              src="https://res.cloudinary.com/dcpte972l/image/upload/v1691409328/2123644_khielq.jpg"
              className="w-full h-full object-cover"
              alt="Category"
            />
          </div>
        </a>
        <span className="block mt-2 text-center text-sm md:text-base">
          Electronics
        </span>
      </div>
      <div
        className="relative group transition-transform duration-300 transform-gpu hover:scale-105"
        onClick={handleCategoryClick}
      >
        <a href="#" className="block">
          <div className="rounded-full overflow-hidden w-16 h-16 md:w-20 md:h-20 shadow-xl mx-auto">
            <img
              src="https://res.cloudinary.com/dcpte972l/image/upload/v1691409328/2123644_khielq.jpg"
              className="w-full h-full object-cover"
              alt="Category"
            />
          </div>
        </a>
        <span className="block mt-2 text-center text-sm md:text-base">
          Electronics
        </span>
      </div>
      <div
        className="relative group transition-transform duration-300 transform-gpu hover:scale-105"
        onClick={handleCategoryClick}
      >
        <a href="#" className="block">
          <div className="rounded-full overflow-hidden w-16 h-16 md:w-20 md:h-20 shadow-xl mx-auto">
            <img
              src="https://res.cloudinary.com/dcpte972l/image/upload/v1691409328/2123644_khielq.jpg"
              className="w-full h-full object-cover"
              alt="Category"
            />
          </div>
        </a>
        <span className="block mt-2 text-center text-sm md:text-base">
          Electronics
        </span>
      </div>
      
    </div>
  );
};

export default HerroCategory;
