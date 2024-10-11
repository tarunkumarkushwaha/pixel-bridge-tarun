import './App.css'
import HeroSection from './components/HeroSection'
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Middlesection from './components/Middlesection';
import Slider from './components/slider';
import Footer from './components/Footer';

const SlideComponent = ({ children, slide, setSlide }) => {

  useEffect(() => {
    setTimeout(() => setSlide(true), 300);
  }, []);

  return (
    <div className={`transform transition-transform duration-1000
    md:w-[80vw] w-[100vw] sm:w-[90vw]
    ${slide ? 'translate-y-0' : 'translate-y-full'}`}>
      {children}
    </div>
  );
};


const Scrollbar = ({ children }) => {
  return (
    <div className='overflow-x-hidden overflow-scroll h-screen
                 [&::-webkit-scrollbar]:w-3 
                 [&::-webkit-scrollbar-track]:bg-yellow-100
                 [&::-webkit-scrollbar-thumb]:bg-yellow-300
                 dark:[&::-webkit-scrollbar-track]:bg-yellow-300
                 dark:[&::-webkit-scrollbar-thumb]:bg-yellow-800
                 [&::-webkit-scrollbar-track]:rounded-r-xl
                 [&::-webkit-scrollbar-thumb]:rounded-r-xl'>
      {children}
    </div>
  )
}


function App() {
  const [slide, setSlide] = useState(false);

  return (
    <>
      <div className=' text-flux flex flex-col items-center md:justify-end justify-start px-3 md:pt-3 pt-0 pb-0 bg-white h-screen overflow-hidden'>
        <SlideComponent slide={slide} setSlide={setSlide}>
          <Scrollbar>
            <HeroSection />
            <Nav/>
            <Middlesection/>
            <Slider/>
            <Footer/>
          </Scrollbar>
  
        </SlideComponent>
      </div>
    </>
  )
}

export default App
