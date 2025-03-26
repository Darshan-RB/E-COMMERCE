
import{Fragment, useEffect, useState} from 'react'
import "../Pages/Home.css";
import ProductCard from '../Components/ProductCard';
import Search from '../Components/Search';
import { useSearchParams } from 'react-router-dom';
export default function Home  ()  {
   const [products,setProducts]=useState([]);
   const [SearchParams,setSearchParams]=useSearchParams();
   
   
   useEffect(()=>{
    fetch(import.meta.env.VITE_API_URL+'/products?'+SearchParams)
    .then(res => res.json())
    .then(res=>setProducts(res.products))
   },[SearchParams])

  return <Fragment>
      

      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {products.map(product=><ProductCard product={product}/>)}

          
        </div>
      </section>

     

     </Fragment>
  
  
}

