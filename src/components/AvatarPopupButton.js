import React,{useState} from 'react';



const AvatarPopupButton = ({handleEditAvatarClick,handlePopupName}) => {
    return (
        <button className="profile__avatar-button" onClick={()=> {
            handleEditAvatarClick(true);
            handlePopupName("popup_avatar")
        }}>
            <a href="#" className="profile__avatar-icon"></a>
        </button>

    );
};

export default AvatarPopupButton;