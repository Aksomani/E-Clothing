import React,{useContext} from 'react';
import { CartContext } from '../../../contexts/cartContext';
import './CheckoutItems.scss';

const CheckoutItems = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    
    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext)

    const handleClear = () => clearItemFromCart(cartItem);
    const handleIncrement = () => addItemToCart(cartItem);
    const handledecrement = () => removeItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={`${name}`}/>
        </div>
        <span className='name'>{name} </span>
        <span className='quantity'> 
        <div className='arrow' onClick={handleIncrement}>▲ &nbsp; </div> 
         {quantity} 
        <div className='arrow' onClick={handledecrement}> &nbsp; ▼</div>
        </span>
        <span className='price'> {price} </span>
      <div className='remove-button' onClick={handleClear}>&#10005;</div>
    </div>
  )
}

export default CheckoutItems
