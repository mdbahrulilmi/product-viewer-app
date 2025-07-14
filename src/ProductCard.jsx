export default function ProductCard()
{
    return(
    <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className="align-center flex justify-center">
            <img className="rounded-t-lg max-h-[200px]" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white ">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h5>
            </a>
            <div className="bg-orange-100 px-[4px] w-fit mb-5">
                <div class="font-bold text-sm text-orange-600 dark:text-orange-600">Category</div>
                </div>
            <p class="mb-3 font-bold text-lg text-gray-700 dark:text-gray-400">109.95</p>
            <button type="button" class="w-full hover:cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">ADD TO CART</button>
        </div>
    </div>
    )
}