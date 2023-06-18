import React from 'react';

 const ProfilePopupButton = ({handleEditProfileClick,setPopupForm,form}) => {

    return (
        <div>
            <button type="button" className="profile__edit-button" onClick={()=> {
                handleEditProfileClick(true);
                setPopupForm(form);
            }}>Open Popup</button>

        </div>
    );
};

export default ProfilePopupButton;