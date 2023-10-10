import React, { useContext } from 'react';
import { CartContext } from '../../../contexts/cartContext';
import '../CartIcon/cart-style.scss';
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    // Update the state directly by toggling its value
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shoping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
