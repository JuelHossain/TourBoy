import React from 'react';
import banner from '../../../banner.jpg'

const Banner = () => {
    return (
      <div>
        <div className="relative">
          <img className="object-cover " src={banner} alt="banner img" />
          <h1 className="absolute inset-x-0 bottom-0 h-16 ">Tour Boy</h1>
        </div>
      </div>
    );
};

export default Banner;