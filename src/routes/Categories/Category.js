import React,{useContext, useState, useEffect} from 'react'
import './CategoryStyle.scss'
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categoriesContext';
import ProductsCard from '../../components/productCard/ProductsCard';
import Navbar from '../../components/Navbar';

const Category = () => {
    const {category} = useParams(); 
    const {categoriesMap} = useContext(CategoriesContext);
    // const products = categoriesMap[category]
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    
  return (
    <>
    <Navbar/>
    <h2 className='category-title'>{category.toUpperCase()}</h2>

    <div className='category-container'>
      {products && products.map((product) => <ProductsCard key={product.id} product={product}/>)}
    </div>
    </>
  )
}

export default Category
