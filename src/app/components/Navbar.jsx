import Link from 'next/link';

function Navbar() {
  return (
    <nav className='bg-[#333] text-white p-5'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div>
            <Link href='/'>NextAuth</Link>
          </div>
          <ul className='flex gap-3'>
            <li>
              <Link href='/login'>Sign In</Link>
            </li>
            <li>
              <Link href='/register'>Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
