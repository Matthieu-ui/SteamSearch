import React, { useEffect } from "react";


const Aside = () => {

    // in mobile view, the aside will be hidden, only the hamburger icon will be visible

    const [aside, setAside] = React.useState(true);

    const toggleAside = () => {
        setAside(!aside);
    };



    return (
        <div>
            {/* aside left side column */}
            <aside className="bg-secondary border-r border-gray-400 h-screen overflow-y-auto">
        
   
                <div className="flex flex-col w-32 md:w-64 max-lg:64
    bg-secondary border-r border-gray-400 h-screen overflow-y-auto
    ">
                    <div className="flex flex-col items-center justify-center h-20 bg-color-secondary border-b border-gray-400">
                        <div className="flex flex-col items-center">
                            <img src="./public/logo1.png" alt="logo" className="w-12 hover:brightness-150  brightness-200 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 drop-shadow-sm hover:drop-shadow-lg" />
                        </div>
                        
                            <p className="font-thin text-accent text-sm drop-shadow-sm hover:drop-shadow-lg">SL-API</p>
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                    <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    </div>
                </div>
            </aside>
        </div>





    );

}

export default Aside;
