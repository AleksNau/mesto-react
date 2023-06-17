import React from 'react';

 const ProfilePopupButton = ({setActive,setPopupForm,form}) => {

    return (
        <div>
            <button type="button" className="profile__edit-button" onClick={()=> {
                setActive(true);
                setPopupForm(form);
            }}>Open Popup</button>

        </div>
    );
};

export default ProfilePopupButton;