import React, {useContext} from 'react';
import { CartContext } from '../../contexts/cartContext';
import './product-card.styles.scss'

const ProductsCard = ({product}) => {

  const {addItemToCart} = useContext(CartContext);

    const {name, price, imageUrl} = product;

    const addProductToCart = () => {addItemToCart(product)}

  return (
    <div className='product-card-container'>
       <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
      <button className='button' onClick={addProductToCart}>Add to cart</button>
    </div>
  )
}

export default ProductsCard;
