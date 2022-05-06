import React from "react";
import { Link } from "react-router-dom";
import { authButton, checkoutButton, submitButton } from "../../../Utilities/ClassName/ClassName";

const Service = ({
  name,
  duration,
  pickup,
  dropoff,
  carService,
  streetFood,
  Water,
  picture,
  price,
  description,
}) => {
  return (
      <div className="w-full h-[700] border-2 p-2 flex flex-col">
      <img className="w-full h-[300px] object-cover " src={picture} alt={name} />
      <h2 className="text-3xl my-2 font-bold  ">{name}</h2>
      <div className="p-1 font-semibold">
        <p>Duration: {duration}</p>
        <p>Pickup: {pickup}</p>
        <p>Drop off: {dropoff}</p>
        <p>Car Service: {carService}</p>
        <p>Street Food: {streetFood}</p>
        <p>Water: {Water}</p>
      </div>
      <p className="p-1 border border-b-4  ">{description}</p>
      <h2 className="text-4xl p-1 text-center m-2 font-semibold">{price} Taka</h2>
      <Link className={checkoutButton} to={"/checkout"}>Checkout</Link>
    </div>
  );
};

export default Service;
