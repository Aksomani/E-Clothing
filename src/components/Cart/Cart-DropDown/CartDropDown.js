import React,{useContext} from 'react';
import { CartContext } from '../../../contexts/cartContext';
import '../Cart-DropDown/CartDropDown-style.scss'
import CartItem from '../CartItem/CartItem';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {
  const navigate = useNavigate()

  const handleCheckout =() => {
    navigate('/checkout')
  }

  const {cartItems} = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item}/>))}
        </div>
        <button className='button' onClick={handleCheckout}>Checkout</button>
      
    </div>
  )
}

export default CartDropDown
