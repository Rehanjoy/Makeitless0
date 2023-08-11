
import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbutton from "@/components/buttons/Navbutton";

function MerakiNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-white rounded-lg shadow-xl">
      <div className="container mx-auto md:flex">
        <div className="flex items-center justify-between">
          <a
            id="WindUI"
            aria-label="WindUI logo"
            aria-current="page"
            className="flex items-center gap-1 whitespace-nowrap py-3 text-md focus:outline-none lg:flex-1 font-jenna-sue"
            href="javascript:void(0)"
          >
            <img
              className="w-20 h-20 sm:h-16"
              src="https://res.cloudinary.com/dcpte972l/image/upload/v1691481291/Customized_T-Shirt_Design_Clothing_New_Arrivals_Instagram_Post_1_vax6ah.png"
              alt=""
            />
            Make It Less
          </a>
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar (below the logo) */}
        <div className={`relative z-10 mx-5 mt-2 md:hidden ${isOpen ? 'hidden' : ''}`}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:text-gray-300 dark:border-gray-600 focus:border-pink-400 dark:focus:border-pink-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-pink-500"
            placeholder="Search Products..."
          />
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"}`}
        >
          <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0 flex-grow justify-between ">
          <a
  href="/"
  className="px-3 py-2 text-gray-900 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-200 md:mx-2"
>
  Home
</a>

<Navbutton text21="rehan2" text22="rehan2" text23="rehan2" text24="rehan2" text1="Electronics" />
<Navbutton text21="rehan3" text22="rehan3" text23="rehan3" text24="rehan3" text1="Kitchen" />
<Navbutton text21="rehan5" text22="rehan5" text23="rehan5" text24="rehan5" text1="Beuty" />
<Navbutton text21="rehan5" text22="rehan5" text23="rehan5" text24="rehan5" text1="Kids" />

<Navbutton text21="rehan4" text22="rehan4" text23="rehan4" text24="rehan4" text1="Shoes" />

          </div>

          <div className={`relative z-1 mt-4 mx-1 md:mt-0 flex justify-between ${isOpen ? 'hidden' : ''}`}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg
      className="w-5 h-5 text-gray-400"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round" />
    </svg>
  </span>

  <input
    type="text"
    className="w-full py-2  pl-10 pr-4  text-gray-700 bg-white border rounded-lg  dark:text-gray-300 dark:border-gray-600 focus:border-pink-400 dark:focus:border-pink-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-pink-500"
    placeholder="Search Products..." />
          </div>

          <div className="flex justify-center mx-5 gap-4">
          <button
    onClick={() => router.push(`/Login`)}
    type="button"
    className="rounded bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-700/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >

    Login
  </button>
  <button
    onClick={() => router.push(`/Login`)}
    type="button"
    className="rounded bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-700/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >

    Singup
  </button>
  <button
    onClick={() => router.push(`/Login`)}
    type="button"
    className="rounded bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-700/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >

    Cart
  </button>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default MerakiNavbar;
