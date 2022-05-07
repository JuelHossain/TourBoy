import React from 'react';

const PlaceCard = ({name,photo,description}) => {
    return (
        <div className='h-[800px] flex flex-col gap-3 items-center p-4 border'>
            <img className='object-cover h-1/2 w-full' src={photo} alt={name} />
            <p className='text-4xl underline underline-offset-8'>{name}</p>
            <p className='text-xl'>{description.substring(0,500)}</p>
        </div>
    );
};

export default PlaceCard;