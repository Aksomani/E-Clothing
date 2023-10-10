import React,{useContext} from 'react';
import './Checkout-style.scss';
import { CartContext } from '../../contexts/cartContext';
import Navbar from '../Navbar';
import CheckoutItems from './checkout-items/CheckoutItems';

const Checkout = () => {
    const{cartItems, cartTotal} = useContext(CartContext);

  return (
    <>
    <Navbar/>

    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-blocks'>
                <span>Product</span>
            </div>
            <div className='header-blocks'>
            <span>description</span>
            </div>
            <div className='header-blocks'>
            <span>Quantity</span>
            </div>
            <div className='header-blocks'>
            <span>Price</span>
            </div>
            <div className='header-blocks'>
            <span>Remove</span>
            </div>
        </div>
            {cartItems.map((cartItem) =>  {
                return (
               <CheckoutItems key={cartItem.id} cartItem={cartItem}/>
                )
            } )}
            <span className='total'>Total: ${cartTotal}</span>
    </div>
    </>

  )
}

export default Checkout
