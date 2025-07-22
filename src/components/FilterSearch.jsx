import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function FilterSearch({onSubmit}){
    const [value, setValue] = useState("");

    function handleSubmit(e) {
            e.preventDefault();
            if (onSubmit) onSubmit(value);
    }
    
    return(
        <form className="flex border border-gray-200 rounded-xs p-1 w-[600px] shadow-sm dark:text-gray-200"
        onSubmit={handleSubmit}>
            <input className="px-2 w-full outline-none" 
            type="text" 
            placeholder="Search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="bg-gray-800 hover:bg-gray-900 cursor-pointer px-4 py-[4px] text-white text-[20px]"><IoIosSearch /></button>
        </form>
    )
}