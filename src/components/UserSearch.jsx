import React, { useState, useEffect } from "react"
import { Icon } from '@iconify/react';

const UserSearch = () => {
    return (
        
        <div>
            <form className="flex flex-col p-1">

                <input type="text" className="rounded-md nm-inset-gray-200 px-2 py-2 flex-grow sm:w-2/3" placeholder="Search for a user" />
                <button className="rounded-md py-2 flex items-center justify-center mt-5 nm-flat-slate-900-sm text-gray-300 hover:nm-inset-secondary">
                <Icon icon="game-icons:steampunk-goggles" className="w-10 h-10 text-gray-300 drop-shadow-sm hover:animate-pulse" /><small></small></button>

            </form>
        </div>
    )

}

export default UserSearch


    
