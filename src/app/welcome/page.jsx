'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import { useSession } from 'next-auth/react';

function WelcomePage() {
  const { data: session } = useSession();

  console.log(session);
  return (
    <div>
      <Navbar />
      <div className='container mx-auto'>
        <h3 className='text-3xl my-3'>Welcome user</h3>
        <hr className='my-3' />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          porro. Adipisci mollitia dicta nulla et voluptas ad ducimus doloremque
          eum tempore impedit sit, odit fuga odio, velit harum. Laborum, nihil!
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;
