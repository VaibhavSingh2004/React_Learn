import React from 'react'

function Navbar() {
  return (
    <div className='bg-slate-900 text-white px-2 py-3
    '>
        <nav className='flex flex-wrap justify-between'>
            <p>ALKAYADA</p>
            <ul className='md:flex flex-wrap hidden md:autoAlpha'>
                <li className='mx-2'>Home</li>
                <li className='mx-2'>Services</li>
                <li className='mx-2'>Missions</li>
            </ul>
            <p>LOGIN/SIGNUP</p>
        </nav>
    </div>
  )
}

export default Navbar