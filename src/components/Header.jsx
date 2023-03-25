import React, { useState } from 'react';

const Header = () => {

    const [asideToggle, setAsideToggle] = useState(false)

    const toggleAside = () => {
        setAsideToggle(!asideToggle)
    }

    const asideClass = asideToggle ? "aside-open" : "aside-close";



    
    return (

<>
        <div className="flex w-auto position relative 40 flex-col items-center justify-center p-4 bg-primary drop-shadow-md border-b border-gray-400 z-10">

            <img className="w-10 h-10 hue-rotate-180 brightness-150 hover:scale-110 transition transform duration-500 ease-in-out hover:brightness-200" src="logo1.png" alt="logo" />

            <p className="p-5 font-thin text-accent text-sm drop-shadow-sm brightness-150 ">SDB-API : Search Steam Web API</p>

            <button className="rounded-md py-2 flex items-center justify-center mt-5 nm-flat-slate-900-sm text-gray-300 hover:nm-inset-secondary" onClick={toggleAside}>    

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300 drop-shadow-sm hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>

            </button>
            
     
        </div>  
    


</>


    );


}

export default Header;