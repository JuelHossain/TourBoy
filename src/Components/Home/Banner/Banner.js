import React from 'react';
import banner from '../../../banner.jpg'

const Banner = () => {
    return (
      <div className='my-10'>
        <div className="relative">
          <div className="absolute right-80 bottom-60  ">
            <h1 className="text-7xl mb-2 p-4 bg-red-800 text-stone-300 font-bold hover:bg-[#2c2a38]">
              Tour Boy
            </h1>
            <p className="text-5xl bg-stone-300 p-3">
              The Guide You Want To Hire
            </p>
          </div>
          <img
            className="object-cover h-[800px] w-full"
            src={banner}
            alt="banner img"
          />
        </div>
      </div>
    );
};

export default Banner;