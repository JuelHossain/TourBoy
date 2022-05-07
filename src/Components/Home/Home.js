import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Places from '../Places/Places'

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Places></Places>
        <Services></Services>
      </div>
    );
};

export default Home;