import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({searchbar}){

    const [darkMode,setDarkMode ] = useState(false)

    useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

    return(
    <nav class="bg-white dark:bg-gray-800 shadow-sm">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="" class="h-8" alt="" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Navbar</span>
    </a>
    {searchbar}
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li>
            <Link
                to="/"
                className="block py-2 px-3 text-white bg-gray-800 rounded-sm md:bg-transparent md:text-gray-800 md:p-0 md:hover:text-gray-500 dark:text-white md:dark:hover:text-gray-300"
                aria-current="page"
            >
                Home
            </Link>
            </li>
            <li>
            <Link
                to="/cart"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-800 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-white md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
                Cart
            </Link>
            </li>
            <li>
                <div class="bg-white dark:bg-gray-900 justify-center flex flex-row items-center transition-all ease-in-out">
                <div class="flex flex-row justify-between toggle">
                    <label for="dark-toggle" class="flex items-center cursor-pointer">
                        <div class="relative">
                        <input 
                        type="checkbox" 
                        name="dark-mode" 
                        id="dark-toggle" 
                        class="checkbox hidden" 
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        />
                        <div className={`block border-[1px] border-gray-200 dark:border-white  w-13 h-7 rounded-full ${darkMode ? "bg-gray-800" : "bg-white"}`}></div>
                        <div className={`dot absolute left-1 top-1 w-5 h-5 rounded-full transition ${darkMode ? "translate-x-6 bg-white" : "bg-gray-800"}`}></div>
                        </div>
                    </label>
                    </div>
                </div>
            </li>
        </ul>
        </div>

    </div>
    </nav>

    )
}