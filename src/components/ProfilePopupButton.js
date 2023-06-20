import React from 'react';

 const ProfilePopupButton = ({handleEditProfileClick,setPopupForm,form,handlePopupName}) => {

    return (

            <button type="button" className="profile__edit-button" onClick={()=> {
                handleEditProfileClick(true);
                handlePopupName("profile")
            }}>Open Popup</button>

    );
};

export default ProfilePopupButton;