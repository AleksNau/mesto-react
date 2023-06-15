import React,{useState} from 'react';
import ProfilePopup from "./ProfilePopup.js";

 const ProfilePopupButton = ({ open }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button type="button" className="profile__edit-button" onClick={() => setIsOpen(!isOpen)}>Open Popup</button>
            {isOpen && <ProfilePopup />}
        </div>
    );
};

export default ProfilePopupButton;