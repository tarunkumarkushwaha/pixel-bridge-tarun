import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-white p-6 md:p-12">
      
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h2 className="titan text-4xl md:text-5xl font-bold text-yellow-500">
          SOCIAL MEDIA LINKS
        </h2>
      </div>

      
      <div className="flex justify-between items-center">
      <div className="bg-blue-500 text-white rounded-lg p-4 mt-6 w-64 mx-auto md:mx-0">
          <div className="flex items-center space-x-1 mb-3">
            <img
              src="/Alabay Assets/twitter logo 1.png"
              alt="Twitter"
              className="w-6 h-6"
            />
            <a href="#twitter" className="text-lg">
              Twitter Link
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/Alabay Assets/Mask group.png"
              alt="Telegram"
              className="w-6 h-6"
            />
            <a href="#telegram" className="text-lg">
              Telegram Link
            </a>
          </div>
        </div>
        <img
          src="/Alabay Assets/footimagedog.png" 
          alt="Dog holding a phone"
          className="w-48 md:w-96 h-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
