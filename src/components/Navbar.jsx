// src/components/Navbar.js
import React from 'react';
import HomeIcon from '../assets/homeIcon.svg';
import SkillIcon from '../assets/skillsIcon.svg';
import ProjectIcon from '../assets/projectIcon.svg';
import ContactIcon from '../assets/contactIcon.svg';
/**
 * Renders the Navbar component, which is a fixed bottom navigation bar with icons and a pagination control.
 * The Navbar provides links to different sections of the portfolio website, including Home, Skills, Projects, and Contact.
 * The Navbar is designed to be responsive and work well on both desktop and mobile devices.
 */
const Navbar = () => {
    return (
        <div className="fixed bottom-0 z-50 w-full h-16 -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-6 mx-auto">
                {/* HOME ICON */}
                <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <img src={HomeIcon} alt="Home Image" className="w-15 h-15 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                    <span className="sr-only">Home</span>
                </button>
                <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Home
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                {/* SKILLS ICON */}
                <button data-tooltip-target="tooltip-skill" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <img src={SkillIcon} alt="Home Image" className="w-15 h-13 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                    <span className="sr-only">Skill</span>
                </button>
                <div id="tooltip-skill" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Skill
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                {/* PAGINATION */}
                <div className="flex items-center justify-center col-span-2 ">
                    <div className="flex items-center justify-between w-full text-gray-600 dark:text-gray-400 bg-gray-100 rounded-lg dark:bg-gray-600 max-w-[128px] mx-2">
                        <button type="button" className="inline-flex items-center justify-center h-8 px-1 w-6 bg-gray-100 rounded-s-lg dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800">
                            <svg className="w-2 h-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous page</span>
                        </button>
                        <span className="flex-shrink-0 mx-1 text-sm font-medium space-x-0.5 rtl:space-x-reverse">1 of 55</span>
                        
                        <button type="button" className="inline-flex items-center justify-center h-8 px-1 w-6 bg-gray-100 rounded-e-lg dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800">
                            <svg className="w-2 h-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next page</span>
                        </button>
                    </div>
                </div>
                {/* PROJECT ICON */}
                <button data-tooltip-target="tooltip-project" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <img src={ProjectIcon} alt="Home Image" className="w-15 h-15 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                    <span className="sr-only">Projects</span>
                </button>
                <div id="tooltip-project" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Projects
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                {/* CONTACT ICON */}
                <button data-tooltip-target="tooltip-contact" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <img src={ContactIcon} alt="Home Image" className="w-15 h-15 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                    <span className="sr-only">Contact</span>
                </button>
                <div id="tooltip-contact" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Contact
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </div>


    );
};

export default Navbar;


