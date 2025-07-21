import FilterCheckbox from "../components/FilterCheckbox"


export default function Sidebar({categories, selectedCategories, setSelectedCategories}){
    return(
        <>
            <div className="w-[250px] px-5">
               <p className='font-bold mb-2'>Filter Category</p>
                {categories.map((category) => (
                    <FilterCheckbox
                        key={category}
                        category={category}
                        checked={selectedCategories.includes(category)}
                        onChange={(checked) => {
                            setSelectedCategories(prev =>
                            checked
                                ? [...prev, category]
                                : prev.filter(c => c !== category)
                            )
                        }}
                        />

                    ))}
            </div>
        </>
    )
}