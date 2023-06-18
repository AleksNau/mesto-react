import React,{useState} from 'react';



const AvatarPopupButton = ({handleEditAvatarClick,setPopupForm,form}) => {
    return (
        <button className="profile__avatar-button" onClick={()=> {
            handleEditAvatarClick(true);
            setPopupForm(form);
        }}>
            <a href="#" className="profile__avatar-icon"></a>
        </button>

    );
};

export default AvatarPopupButton;