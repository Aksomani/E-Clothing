import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({Category}) => {
   
  const {imageUrl, title, subtitle, route} = Category;
  
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route)

  return (
    
      <div 
      onClick={onNavigateHandler}
        className="min-w-30 h-60 flex flex-auto items-center justify-center border border-black overflow-hidden m-0 mx-1.5 my-3 "
        >
          <div className='hover:scale-110 hover:transition-transform duration-6000 opacity-70 flex' style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%', 
            }}
            />
          <div className='h-24 border border-black gird items-center justify-center p-1 ' >
            <h2 className='item-center' >{title}</h2>
            <p>{subtitle}</p>
          </div>
      </div>
    
  )
}

export default CategoryItem;
