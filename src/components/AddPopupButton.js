import React from 'react';

const AddPopupButton = ({handleAddPlaceClick,setPopupForm,form,handlePopupName}) => {
    return (
        <div>
            <button type="button" className="profile__add-button"
                    onClick={()=> {
                        handleAddPlaceClick(true);
                        setPopupForm(form);
                        handlePopupName("popup_add")
                    }}></button>
        </div>
    );
};

export default AddPopupButton;