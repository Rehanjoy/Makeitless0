import React, { useState } from "react";
import { useRouter } from "next/router";

function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const openDropdown = () => {
        setIsOpen(true);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
        >
            <div className="flex items-center relative">
                <button className="relative z-10 flex items-center px-2.5 py-2 text-gray-900 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200 md:mx-2">
                    {props.text1}
                </button>

                {isOpen && (
                    <div className={`absolute right-0 ${props.isSmallScreen ? 'z-0' : 'z-100'} w-48 transform ${props.isSmallScreen ? 'translate-y-4' : 'translate-y-20 md:translate-y-30'} translate-x-20 origin-top-right bg-white rounded-md shadow-xl`}>
                        <a
                            href="#"
                            className="block px-4 py-3 text-sm text-transparent capitalize transition-colors duration-300 transform dark:text-transparent hover:bg-gray-100 dark:hover:text-white"
                        >
                            {props.text1}
                            &nbsp;
                        </a>
                        {/* Other links */}
                        <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-600 hover:bg-gray-100 dark:hover:text-pink-400">{props.text21}</a>
                        <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-600 hover:bg-gray-100 dark:hover:text-pink-400">{props.text22}</a>
                        <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-600 hover:bg-gray-100 dark:hover:text-pink-400">{props.text23}</a>
                        <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-600 hover:bg-gray-100 dark:hover:text-pink-400">{props.text24}</a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dropdown;
