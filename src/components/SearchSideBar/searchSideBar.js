import React from 'react';
import './style.css'
import { FaSistrix } from "react-icons/fa";

const SearchSideBar = () => {
    return(
        <>
            <div className="search-style">
                <FaSistrix className="lupa"/>
                <input 
                    type="text" 
                    placeholder= "Buscar en twitter"
                    className="input-style"
                />
            </div>
            
        </>
    )
}

export default SearchSideBar;