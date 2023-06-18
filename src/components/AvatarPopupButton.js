import React,{useState} from 'react';



const AvatarPopupButton = ({handleEditAvatarClick,setPopupForm,form,handlePopupName}) => {
    return (
        <button className="profile__avatar-button" onClick={()=> {
            handleEditAvatarClick(true);
            setPopupForm(form);
            handlePopupName("popup_avatar")
        }}>
            <a href="#" className="profile__avatar-icon"></a>
        </button>

    );
};

export default AvatarPopupButton;