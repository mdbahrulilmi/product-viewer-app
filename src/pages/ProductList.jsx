import { useEffect, useState } from 'react'
import ProductCard from "../components/ProductCard";
import ProductDetail from "../components/ProductDetail";
import FilterCheckbox from '../components/FilterCheckbox';
import FilterSearch from '../components/FilterSearch';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Sidebar from '../layouts/Sidebar';

export default function ProductList({searchProducts})
{
    const [products, setProducts] = useState([])
    const [open, setOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [selectedCategories, setSelectedCategories] = useLocalStorage('categories',[]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res) => {
            return res.json();
        })
        .then((data)=>{ 
            setProducts(data)
        })
    },[])
    
    const categories = [...new Set(products.map(product => product.category))]

    let filteredProducts = products

    if(selectedCategories.length > 0){
        filteredProducts = products.filter(p => selectedCategories.includes(p.category))
    }

    if(searchProducts.length > 0){
        filteredProducts = products.filter(p=> p.title.toLowerCase().includes(searchProducts.toLowerCase()));
    }

    if(selectedCategories.length > 0 && searchProducts.length > 0){
        filteredProducts = products.filter(
        p => selectedCategories.includes(p.category) &&
        p.title.toLowerCase().includes(searchProducts.toLowerCase()))
    }


    return(
        <>
        <div class="flex px-[5%] py-8 dark:bg-gray-900 dark:text-gray-200">
            <Sidebar 
            categories={categories} 
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 px-5 items-stretch">
                {
                filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onClick={() => {
                        setSelectedProduct(product)
                        setOpen(true)
                    }}/>
                ))
            }
            </div>
        </div>
        <ProductDetail product={selectedProduct} open={open} setOpen={setOpen} />
        </>
    )
}