export default function ProductCard({onClick, product})
{
    return(
    <div key={product.key} onClick={onClick} className="max-w-xs h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
        <a href="#"className="align-center flex justify-center">
            <img className="rounded-t-lg max-h-[200px]" src={product.image} alt="" />
        </a>
        <div className="p-5 flex flex-col flex-grow justify-between">
            <a href="#">
                <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white ">{product.title}</h5>
            </a>
            <div className="bg-orange-100 px-[4px] w-fit mb-5">
                <div className="font-bold text-sm text-orange-600 dark:text-orange-600">{product.category}</div>
                </div>
            <p className="mb-3 font-bold text-lg text-gray-700 dark:text-gray-400">{product.price}</p>
            <button type="button" className="w-full cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={onClick}>SHOW DETAIL</button>
        </div>
    </div>
    )
}