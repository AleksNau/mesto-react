import React from 'react';

 const ProfilePopupButton = ({handleEditProfileClick,setPopupForm,form,handlePopupName}) => {

    return (
        <div>
            <button type="button" className="profile__edit-button" onClick={()=> {
                handleEditProfileClick(true);
                setPopupForm(form);
                handlePopupName("popup_profile")
            }}>Open Popup</button>

        </div>
    );
};

export default ProfilePopupButton;