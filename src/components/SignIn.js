import React, { useState } from 'react';
import { signInGoogleWithPopup, createUserDocFromAuth, signInAuthUserWithEmailAndPassword } from '../utils/Firebase';
import { Link, useNavigate } from 'react-router-dom';
import view from '../assets/view.png'; 
import hide from '../assets/hide.png'; 
import Navbar from './Navbar';

const defaultFormFields = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignIn = () => {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInGoogleWithPopup();
    navigate('/home');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
      navigate('/home');

    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Incorrect password');
      }
      else if (error.code === 'auth/user-not-found') {
        alert('Invalid email ID');
      }
      else if (error.code === 'auth/invalid-login-credentials') {
        alert('Invalid credentials passed');
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <Navbar />
      <div className='my-24'>
        <div className='flex items-center justify-center'>
          <div className='m-2 p-2 w-96 flex flex-col items-center relative border-2 border-gray-600'>
            <h1 className='font-extrabold mb-2'>Don't Have an Account</h1>
            <h2 className='text-center font-semibold mb-4'>Sign Up with Your Email and Password</h2>
            <form onSubmit={handleSubmit} className='items-center justify-center'>
              <div className='m-2'>
                <input
                  type='email'
                  required
                  placeholder='Email'
                  className='border-b-2 m-2 p-2 block w-full rounded-none mt-5'
                  name='email'
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className='m-2 flex'>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder='Password'
                  required
                  className='border-b-2 m-2 p-2 block w-full rounded-none mt-5'
                  name='password'
                  value={password}
                  onChange={handleChange}
                />
                <button onClick={togglePasswordVisibility} >
                  <img className='w-7'
                    src={passwordVisible ? view : hide} // Use imported image URLs directly
                    alt={passwordVisible ? 'Hide Password' : 'Show Password'}
                  />
                </button>
              </div>
              <div className='m-3 flex justify-center'>
                <button
                  type="submit"
                  className='border-2 p-3 m-4 rounded-md bg-indigo-500 text-white font-semibold hover:bg-white hover:text-indigo-500 hover:shadow-md'>
                  Sign In
                </button>
                <button
                  className='border-2 p-3 m-4 rounded-md bg-indigo-500 text-white font-semibold hover:bg-white hover:text-indigo-500 hover:shadow-md'
                  onClick={signInWithGoogle}
                  type='button'
                >
                  Google Sign In
                </button>
              </div>
              <div>
                <p>
                  Don't have an account?{' '}
                  <span className='text-blue-500 hover:text-blue-800 hover:underline '>
                    <Link to="/signup">Sign Up </Link>
                  </span>
                  here
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
