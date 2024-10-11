
import React, { useState,useEffect } from 'react';

const Slider = () => {
    const images = [
        '/Alabay Assets/Alabay Merch/black hoodie.png',
        '/Alabay Assets/Alabay Merch/cap mockup.png',
        '/Alabay Assets/Alabay Merch/pink tshirt.png',
        '/Alabay Assets/Alabay Merch/yellow tshirt.png',
      ];
    const imagesbg = [
        // '/Alabay Assets/Alabay Merch/black hoodie bck.png',
        // '/Alabay Assets/Alabay Merch/blue cap bck.png',
        '/Alabay Assets/Alabay Merch/pink tee bck.png',
        // '/Alabay Assets/Alabay Merch/yellow tee bck.png',
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const delay = 3000;

  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, delay);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-pink">
      <h1 className="text-5xl font-bold text-yellow-400">MERCHANDISE</h1>
      <div className="relative w-[500px] h-[500px] overflow-hidden mt-6">
        <div
          className="flex transition-transform ease-in-out duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`shirt-${index}`}
              className="w-[500px] h-[500px] object-cover flex-shrink-0"
            />
          ))}
          {/* {imagesbg.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`shirt-${index}`}
              className="w-[500px] h-[500px] object-cover absolute top-3 z-10 flex-shrink-0"
            />
          ))} */}
        </div>
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl cursor-pointer text-black"
          onClick={handlePrev}
        >
          &#8249;
        </div>
        <div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl cursor-pointer text-black"
          onClick={handleNext}
        >
          &#8250;
        </div>
      </div>
      <button className="mt-5 bg-black text-white px-6 py-2 rounded-full">
        Discover
      </button>
    </div>
  );
};

export default Slider;

