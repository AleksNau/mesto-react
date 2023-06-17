import React from 'react';

const AddPopupButton = ({setActive,setPopupForm,form}) => {
    return (
        <div>
            <button type="button" className="profile__add-button"
                    onClick={()=> {
                        setActive(true);
                        setPopupForm(form);
                    }}></button>
        </div>
    );
};

export default AddPopupButton;