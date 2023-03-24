import React, { useEffect } from "react";
import UserSearch from "./UserSearch";

const Aside = () => {





    return (
        <div>
            {/* aside left side column */}
            <aside className="">
                <div className="flex flex-col w-1/5 md:w-64 max-lg:64 bg-secondary border-r border-gray-400 h-screen overflow-y-auto">
                    <div className="flex flex-col items-center justify-center p-4 bg-primary drop-shadow-md border-b border-gray-400">
                        <div className="flex flex-col items-center">
                            <img src="./public/logo1.png" alt="logo" className="w-12 hover:brightness-150  brightness-200 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 drop-shadow-sm hover:drop-shadow-lg" />
                        </div>

                        <p className="font-thin text-accent text-sm drop-shadow-sm hover:drop-shadow-lg animate-pulse brightness-150">SL-API</p>
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                   <UserSearch />
                    </div>
                </div>
            </aside>
        </div>





    );

}

export default Aside;
