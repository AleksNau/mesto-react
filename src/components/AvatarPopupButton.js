import React,{useState} from 'react';
import AvatarPopup from "./AvatarPopup.js";


const AvatarPopupButton = ({ active,setActive }) => {

    return (
        <button className="profile__avatar-button" onClick={()=>setActive(true)}>

            <a href="#" className="profile__avatar-icon"></a>

        </button>

    );
};

export default AvatarPopupButton;