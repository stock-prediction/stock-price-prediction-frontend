import React from 'react';
import Navigation from './navigation';
import "../styles/home.css";
const Home = () => {
  return (
    <>
    <div className='w-full'><Navigation/></div>
    <div className='w-full h-screen flex'>
    <div className='w-1/2 customcss h-full'></div>
    <div className='w-1/2 bg-cyan-200 h-full'></div>
    </div>
    
    </>
  );
};

export default Home;
