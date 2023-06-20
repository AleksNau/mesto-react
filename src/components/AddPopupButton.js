import React from 'react';

const AddPopupButton = ({handleAddPlaceClick,handlePopupName}) => {
    return (
        <div>
            <button type="button" className="profile__add-button"
                    onClick={()=> {
                        handleAddPlaceClick(true);
                        handlePopupName("popup_add")
                    }}></button>
        </div>
    );
};

export default AddPopupButton;