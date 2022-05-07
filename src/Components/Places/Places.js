import React from 'react';
import useTour from '../../Hooks/useTour';
import PlaceCard from './PlaceCard/Place';

const Places = () => {
    const [tour] = useTour([]);
    return (
      <section id="blogs" className="text-center mb-20">
        <h1 className=" text-4xl m-4 font-bold text-center">Know About Tour Places</h1>
        <div className="grid grid-cols-2 gap-4">
          {tour.map((tourplaces) => (
            <PlaceCard
              name={tourplaces.name}
              photo={tourplaces.photo}
              description={tourplaces.about}
            ></PlaceCard>
          ))}
        </div>
      </section>
    );
};

export default Places;