import React from 'react';

const AddPopupButton = ({handleAddPlaceClick,setPopupForm,form}) => {
    return (
        <div>
            <button type="button" className="profile__add-button"
                    onClick={()=> {
                        handleAddPlaceClick(true);
                        setPopupForm(form);
                    }}></button>
        </div>
    );
};

export default AddPopupButton;