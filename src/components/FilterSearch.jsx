export default function FilterSearch({value, onChange})
{
    return(
        <div className="flex border px-1 py-0.5 w-[180px] mb-3">
            <span className="mr-1"><i>🔍</i></span>
            <input className="w-full outline-none" 
            type="text" 
            placeholder="Search"
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            />
        </div>
    )
}