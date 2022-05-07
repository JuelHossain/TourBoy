import React from 'react';
import { Link } from 'react-router-dom';
import { checkoutButton } from '../../../Utilities/ClassName/ClassName';

const PlaceCard = ({name,photo,description}) => {
    return (
      <div className="h-[800px] flex flex-col gap-3 justify-between items-center p-4 border">
        <img className="object-cover h-1/2 w-full" src={photo} alt={name} />
        <p className="text-4xl underline underline-offset-8">{name}</p>
        <p className="text-xl">{description.substring(0, 500)}</p>
        <Link className={checkoutButton} to={"/services"}>
          Want to Travel?
        </Link>
      </div>
    );
};

export default PlaceCard;