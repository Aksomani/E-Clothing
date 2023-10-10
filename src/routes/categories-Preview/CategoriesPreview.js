import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import { CategoriesContext } from '../../contexts/categoriesContext';
import CategoryPreview from '../../components/category/CategoryPreview'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className='category-preview-container'> 
      <Navbar />
      {
        Object.keys(categoriesMap).map(title => (
          <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
        ))
      }
    </div>
  );
};

export default CategoriesPreview;
