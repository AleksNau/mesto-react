import React,{useState} from 'react';
import AvatarPopup from "./AvatarPopup.js";


const AvatarPopupButton = ({ open }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (<>
        <button className="profile__avatar-button" onClick={() => setIsOpen(!isOpen)}>
            <a href="#" className="profile__avatar-icon"></a>
        </button>
    {isOpen && <AvatarPopup />}</>
    );
};

export default AvatarPopupButton;