import { useEffect, useState } from 'react'
import ProductCard from "../components/ProductCard";
import ProductDetail from "../components/ProductDetail";
import FilterCheckbox from '../components/FilterCheckbox';
import FilterSearch from '../components/FilterSearch';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function ProductList()
{
    const [products, setProducts] = useState([])
    const [open, setOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [selectedCategories, setSelectedCategories] = useLocalStorage('categories',[]);
    const [searchProducts, setSearchProducts] = useLocalStorage('search','')

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
        <div className='flex'>
            <div className="w-[200px] px-5">
                <FilterSearch
                value={searchProducts}
                onChange={(value) => {
                    setSearchProducts(value);
                }}
                />
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5">
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