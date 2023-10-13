import React, { Fragment, useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';
import { signOutUser } from '../utils/Firebase';
import Logo from '../assets/logo.jpg'
// import Cart from './Cart/Cart';
import CartIcon from './Cart/CartIcon/CartIcon';
import CartDropDown from './Cart/Cart-DropDown/CartDropDown';
import { CartContext } from '../contexts/cartContext';

const Navbar = () => {

  const navigate = useNavigate();

   const {currentUser} = useContext(UserContext);
  //  console.log(currentUser);
  const {isCartOpen} = useContext(CartContext)

   const signOutHandler = async() => {
    await signOutUser ();
    // setCurrentUser(null);
    navigate('/')
   }

  return (
    <Fragment>
      <div className=' m-2 flex justify-between'>
          <Link to='/home'>
            <img className='w-20 h-14 mx-2' src={Logo} alt='Logo'/>
          </Link>
          <div className='mx-2 flex justify-between items-center'>
              <div >
                <Link to='/shop'>
                  Shop
                </Link>
              </div>
              <div className='ml-3'>
                About
              </div>
              <div className='ml-3'>
                {currentUser ? (
                <button onClick={signOutHandler}>Sign-Out</button>
                ) : (
                <Link to='/'>
                Sign-In 
                </Link>
                )}
                
              </div>
              <div className='ml-3'>
                <CartIcon/>
              </div>
              { isCartOpen && <CartDropDown/>}
          </div>
        <Outlet/>
      </div>
    </Fragment>
  )
}

export default Navbar;
