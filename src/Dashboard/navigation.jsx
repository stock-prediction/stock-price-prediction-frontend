import React from 'react';
import {  useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();

  return (
    <> 
     <div className="navigation-bar shadow-inner-custom  h-16 w-full bg-sky-950 flex items-center justify-around">
          <h2 className="font-semibold text-white text-xl">Stock Price Predictor</h2>

          <div className="nav-items h-12 w-1/2  flex items-center justify-around">
            <h4 className="font-semibold text-white text-md hover:scale-105 hover:underline  transition-all duration-300 ease-in-out">
              Live Stocks
            </h4>
            <h4 className="font-semibold text-white text-md hover:scale-105 hover:underline  transition-all duration-300 ease-in-out">
              Predict Stocks
            </h4>
            <h4 className="font-semibold text-white text-md hover:scale-105 hover:underline  transition-all duration-300 ease-in-out">
              Historical
            </h4>
            <h4 className="font-semibold text-white text-md hover:scale-105 hover:underline  transition-all duration-300 ease-in-out">
              Manage Profile
            </h4>
          </div>

          <div
           
            className="font-semibold text-white text-xl flex gap-4 items-center hover:scale-105 hover:underline  transition-all duration-300 ease-in-out"
          >
           
            <span>Log Out</span>
          </div>
        </div>
    </>
   
  );
};

export default Navigation;
