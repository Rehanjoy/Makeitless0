import React from "react";

const WhatOffers = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          What MakeItLess Offers
        </h1>

        <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
          voluptatibus
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dcpte972l/image/upload/v1691067680/Grey_Minimalist_Men_Clothing_Promo_Instagram_Post_xoln1m.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                Men's Clothing
              </h2>
              <a className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                Visit
              </a>
            </div>
          </div>

          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dcpte972l/image/upload/v1691067898/Purple_Women_Clothing_Promo_Instagram_Post_sysgko.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                Women's Fashion
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                Visit
              </p>
            </div>
          </div>

          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dcpte972l/image/upload/v1691068096/Pink_Kids_Clothing_Promo_Instagram_Post_w8ydem.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                Kid's Fashion
              </h2>
              <button className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOffers;
