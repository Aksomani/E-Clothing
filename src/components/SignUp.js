import React,{useState} from 'react';
import { 
    createAuthUserWithEmailAndPassword, 
    createUserDocFromAuth 
} from '../utils/Firebase';

const defaultFormFields = {
    userName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUp = () => {

    const[formFields, setFormFields] = useState (defaultFormFields);
    const {username, email, password, confirmPassword} = formFields;
    console.log(formFields);

    // const {setCurrentUser} = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(password !== confirmPassword){
            alert("Password do not match");
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword (email, password);
            // setCurrentUser(user);
            await createUserDocFromAuth(user, {username});
            resetFormFields();
        } catch (error){
            if(error.code === "auth/email-already-in-use"){
                alert('User already exist');
            } else {
                
            console.log('encountered and error: ',error);
            }

        }
    }

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

  return (
    <div className='flex items-center justify-center'>
    <div className=' m-2 p-2 w-96 flex flex-col items-center relative border-2 border-gray-600'>
        <h1 className=' font-extrabold  mb-2'>Dont Have an account</h1>
        <h2 className='text-center font-semibold mb-4'>Sign Up with your email and password</h2>
        <form onSubmit={handleSubmit} className=' items-center justify-center' >
            <div className='m-2'>
            <input 
                type='text' 
                required
                placeholder='UserName'
                className='border-b-2 m-2  p-2 block w-full rounded-none  mt-5 focus:border-none '
                name='username'
                value={username}
                onChange={handleChange}
                />
            </div>
            <div className='m-2'>
                {/* <label className='pr-8'>Email</label> */}
                <input 
                type='email' 
                required
                placeholder='Email'
                className='border-b-2 m-2  p-2 block w-full rounded-none  mt-5 '
                name='email'
                value={email}
                onChange={handleChange}
                />
            </div>
            <div className='m-2'>
            {/* <label>Password</label> */}
                <input 
                type='password' 
                placeholder='Password'
                className='border-b-2 m-2  p-2 block w-full rounded-none  mt-5 '
                required 
                name='password'
                value={password}
                onChange={handleChange}
                />
            </div>
            <div className='m-2'>
            {/* <label>Confirm Password</label> */}
                <input
                type='password'
                required 
                className='border-b-2 m-2  p-2 block w-full rounded-none  mt-5 '
                placeholder='Confirm Password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                />  
            </div>
            
            <div className='m-3 flex justify-center'>
    <button 
        type="submit"
        className='border-2 p-3 m-4  rounded-md bg-indigo-500 text-white font-semibold hover:bg-white hover:text-indigo-500 hover:shadow-md'
    >
        Sign Up
    </button>
    </div>

        </form>
    </div>
</div>
  )
}

export default SignUp;
