import { useEffect, useState } from 'react'
import ProductCard from "../components/ProductCard";
import ProductDetail from "../components/ProductDetail";
import FilterCheckbox from '../components/FilterCheckbox';

export default function ProductList()
{
    const [products, setProducts] = useState([])
    const [open, setOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [selectedCategories, setSelectedCategories] = useState([]);

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
    const filteredCategories = selectedCategories.length > 0
        ? products.filter(p => selectedCategories.includes(p.category))
        : products

    return(
        <>
        <div className='flex'>
            <div className="w-[200px] p-5">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
                {
                filteredCategories.map((product) => (
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