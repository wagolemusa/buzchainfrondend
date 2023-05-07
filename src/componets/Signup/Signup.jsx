import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import {RxAvatar} from "react-icons/rx"

const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail ] = useState()
    const [password, setPassword] = useState()
    const [visible, setVisible] = useState()
    const [avatar, setAvatar] = useState(null)

    const handleSubmit = () => {
        console.log("yes yes")
    }

    const handleFileInputChange = (e) => {
        const file = e .target.files[0];
        setAvatar(file)
    }

 return(
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">    
        <div className='sm:mx-auto sm:max-w-md'>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                Register as a new user 
            </h2>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                <form className='space-y-6'>
                    <div>

                        {/* full name */}
                    <label htmlFor="name" className='block text-sm font-medium text-gray-700 pt-4'>
                            Full Name
                        </label>
                        <div className='mt-1'>
                            <input type='text' name='name' autoComplete='name' required
                                value={name} onChange={(e) => setName(e.target.value)} 
                                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'

                            />
                        </div>

                        {/* email */}
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700 pt-4'>
                            Email address
                        </label>
                        <div className='mt-1'>
                            <input type='email' name='email' autoComplete='email' required
                                value={email} onChange={(e) => setEmail(e.target.value)} 
                                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'

                            />
                        </div>

                        {/* password */}
                        <label htmlFor="password" className='block text-sm font-medium pt-4 text-gray-700'>
                            Password
                        </label>
                        <div className='mt-1 relative'>
                            <input type={visible ? "text" : "password"}
                                name='password' autoComplete='Current password' required
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'

                            />
                            {
                                visible ? (
                                    <AiOutlineEye
                                    className='absolute right-2 top-2 cursor-pointer'
                                    size={25}
                                    onClick={() => setVisible(false)}
                                />
                                ) : (
                                    <AiOutlineEyeInvisible
                                    className='absolute right-2 top-2 cursor-pointer'
                                    size={25}
                                    onClick={() => setVisible(true)}
                                />
                                )
                            }
                        </div>
                        {/* upload image */}
                        <div className='pt-4'>
                            <label htmlFor='avatar' className='block text-sm font-medium text-gray-700'></label>
                            <div className='mt-2 flex items-center'>
                                <span className='inline-block h-8 w-8 rounded-full overflow-hidden'>
                                    {
                                        avatar ? 
                                        (
                                           <img src={URL.createObjectURL(avatar)} alt="avatar" className='h-full w-full object-cover rounded-full' />  
                                        ): (
                                            <RxAvatar className='h-8 w-8' />
                                        )
                                    }
                                </span>
                                <lable htmlFor="file-input"
                                className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white"
                                >
                                
                                <span class="sr-only">Upload a file</span>
                                <input type='file'
                                    name='avatar'
                                    id="file-input"
                                    accept='.jpg,.jpeg,.png'
                                    onChange={handleFileInputChange}
                                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                />
                                </lable>
                            </div>
                        </div>
                        
                    {/* submit button */}
                    <div className='pt-6'>
                        <button type='submit'
                            className='group relative w-full h-[-40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
                        >
                        Submit
                        </button>
                    </div>
                    
                    <div className='flex items-center w-full pt-4'>
                        <h4>have any account?</h4>
                        <Link to="/login" className="text-blue-600 pl-2">
                            Login
                        </Link>
                    </div>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
 )
}

export default Signup;