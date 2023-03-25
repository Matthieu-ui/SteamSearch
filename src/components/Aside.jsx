import React, { useState } from "react";
import UserSearch from "./UserSearch";

const Aside = () => {





  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-full p-4 m-auto">
        <h1 className="text-6xl text-accent font-thin">SDB-API</h1>
        <p className="text-2xl text-accent font-thin">Search Steam Web API</p>  
      </div>
      <div className="flex flex-col items-center justify-center h-full p-4 m-auto">
        <UserSearch />
      </div>
    </div>

  );
};

export default Aside;