import { IoIosSearch } from "react-icons/io";

export default function FilterSearch({value, onChange})
{
    return(
        <div className="flex border border-gray-200 rounded-xs p-1 w-[600px] shadow-sm dark:text-gray-200">
            <input className="px-2 w-full outline-none" 
            type="text" 
            placeholder="Search"
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            />
            <button className="bg-gray-500 px-4 py-[4px] text-white text-[20px]"><IoIosSearch /></button>
        </div>
    )
}