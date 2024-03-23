'use client'; //สามารถใช้ React hook ได้

import { useState } from 'react';
import Navbar from '../components/Navbar';

function RegisterPage() {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto py-5'>
        <h3>Register Page</h3>
        <hr className='my-3' />
        <form>
          <input
            className='block bg-gray-200 p-2 my-2 rounded-md'
            type='text'
            placeholder='Enter your name'
          />
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
          <input
            className='block bg-gray-200 p-2 my-2 rounded-md'
            type='password'
            placeholder='Confirm your password'
          />
          <button
            type='submit'
            className='bg-green-500 p-2 rounded-md text-white'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
