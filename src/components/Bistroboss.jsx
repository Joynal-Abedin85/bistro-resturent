import React from "react";
import bgImage from '../assets/home/chef-service.jpg'



const Bistroboss = () => {
  return (
    <div className={`h-[600px] w-full bg-[url('./assets/home/chef-service.jpg')] bg-cover bg-center flex items-center my-10`}>
      <div className="w-9/12 mx-auto bg-white h-2/3  text-center flex flex-col justify-center">
            <h2 className="font-bold text-[70px] ">Bistro Boss</h2>
            <p className="text-xl w-5/6 mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam animi incidunt exercitationem eaque vel ex laborum consequatur. Consequatur, fugit impedit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aliquid?</p>
      </div>
    </div>
  );
};

export default Bistroboss;
