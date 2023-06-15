import React,{useState} from 'react';
import ProfilePopup from "./ProfilePopup.js";

 const ProfilePopupButton = ({ active,setActive }) => {

    return (
        <div>
            <button type="button" className="profile__edit-button" onClick={()=>setActive(true)}>Open Popup</button>

        </div>
    );
};

export default ProfilePopupButton;