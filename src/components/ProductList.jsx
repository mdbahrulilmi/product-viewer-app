import { useEffect, useState} from 'react'
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";


export default function ProductList()
{
    const [products, setProducts] = useState([])
    const [open, setOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res) => {
            return res.json();
        })
        .then((data)=>{ 
            setProducts(data)
        })
    })

    return(
        <>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onClick={() => {
                    setSelectedProduct(product)
                    setOpen(true)
                }}/>
            ))
        }
        </div>
        <ProductDetail product={selectedProduct} open={open} setOpen={setOpen} />
        </>
    )
}