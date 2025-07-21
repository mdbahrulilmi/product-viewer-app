export default function ProductCard({onClick, product})
{
    return(
    <div key={product.key} onClick={onClick} className="max-w-xs min-h-[370px] flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
        <a href="#"className="align-center flex justify-center">
            <img className="rounded-t-lg h-[150px] w-full object-contain" src={product.image} alt="" />
        </a>
        <div className="p-5 flex flex-col flex-grow justify-between">
            <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 min-h-[3.5rem]">{product.title}</h5>
            <div className="bg-orange-100 px-[4px] w-fit min-h-[24px] dark:bg-gray-400">
                <div className="font-bold text-sm text-orange-600 dark:text-gray-700">{product.category}</div>
                </div>
            <p className="mb-3 font-bold text-lg text-gray-700 dark:text-gray-200">Rp {(product.price * 16000).toLocaleString('id-ID')}
            </p>
            <button type="button" className="w-full cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-500 dark:hover:bg-gray-500 dark:focus:ring-gray-500 dark:border-gray-500" onClick={onClick}>SHOW DETAIL</button>
        </div>
    </div>
    )
}