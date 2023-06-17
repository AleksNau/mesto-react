import React,{useState} from 'react';
import AvatarPopup from "./popups/AvatarPopup.js";


const AvatarPopupButton = ({setActive,setPopupForm,form}) => {
    return (
        <button className="profile__avatar-button" onClick={()=> {
            setActive(true);
            setPopupForm(form);
        }}>
            <a href="#" className="profile__avatar-icon"></a>
        </button>

    );
};

export default AvatarPopupButton;