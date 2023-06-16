import React,{useState} from 'react';
import AddPopup from "./AddPopup.js";

const AddPopupButton = ({ active,setActive,setTitle,title }) => {
    return (
        <div>
            <button type="button" className="profile__add-button"
                    onClick={()=> {
                        setActive(true);
                        setTitle(title)
                    }}></button>
        </div>
    );
};

export default AddPopupButton;