'use client'; //สามารถใช้ React hook ได้

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto py-5'>
        <h3>Login Page</h3>
        <hr className='my-3' />
        <form>
          <input
            className='block bg-gray-200 p-2 my-2 rounded-md'
            type='email'
            placeholder='Enter your email'
          />
          <input
            className='block bg-gray-200 p-2 my-2 rounded-md'
            type='password'
            placeholder='Enter your password'
          />
          <button
            type='submit'
            className='bg-green-500 p-2 rounded-md text-white'
          >
            Sign In
          </button>
        </form>
        <hr className='my-3' />
        <p>
          Do not have an account? go to{' '}
          <Link className='text-blue-500 hover:underline' href='/register'>
            Register
          </Link>{' '}
          page
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
