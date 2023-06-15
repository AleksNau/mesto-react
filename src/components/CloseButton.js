import React,{useState} from 'react';


const CloseButton = ({ active,setActive }) => {
    return (
        <div>
            <button type="button"  className="popup__close-button" onClick={()=>setActive(false)}></button>

        </div>
    );
};

export default CloseButton;