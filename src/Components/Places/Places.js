import React from 'react';
import useTour from '../../Hooks/useTour';
import PlaceCard from './PlaceCard/Place';

const Places = () => {
    const [tour] = useTour([]);
    return (
      <section id="blogs" className="text-center my-8">
        <h1 className=" text-4xl m-3">Know About Tour Places</h1>
        <div className="grid grid-cols-2 gap-2">
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