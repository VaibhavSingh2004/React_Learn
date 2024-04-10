import React from 'react';
import Navbar from './Navbar';

function Home() {
  const imageUrl = "https://images.pexels.com/photos/460680/pexels-photo-460680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-screen w-screen overflow-hidden'>
      <Navbar/>
      <div className=' flex flex-col flex-wrap text-centeritems-center justify-center w-full h-full'>
        <h1 className='text-white text-4xl font-extrabold'>ALLAH HU AKBAR</h1>
        <div className='border-b-8 border-b-slate-900 w-[400px] rounded-lg justify-center'> </div>
      </div>
      
    </div>
  );
}

export default Home;
