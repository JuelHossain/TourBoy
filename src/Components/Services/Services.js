import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from './Service/Service';

const Services = () => {
    const [services] = useServices([]);
    return (
      <div className='mb-20'>
        <h1 className='text-4xl m-4 text-center font-bold'>Tour Guide Services</h1>
            <div className="grid grid-cols-3 gap-4 justify-items-center items-center">
                <>
          {services.map((service) => (
            <Service
              key={service.id}
              name={service.packageName}
              duration={service.duration}
              pickup={service.pickup}
              dropoff={service.dropoff}
              carService={service.carService}
              streetFood={service.streetFood}
              Water={service.Water}
              picture={service.picture}
              price={service.Price}
              description={service.description}
            ></Service>
          ))}
                    </>
        </div>
      </div>
    );
};

export default Services;