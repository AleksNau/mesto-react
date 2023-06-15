import React,{useState} from 'react';
import AddPopup from "./AddPopup.js";

const AddPopupButton = ({ active,setActive }) => {
    return (
        <div>
            <button type="button" className="profile__add-button"
                    onClick={()=>setActive(true)}></button>
        </div>
    );
};

export default AddPopupButton;