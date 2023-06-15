import React,{useState} from 'react';
import AddPopup from "./AddPopup.js";

const AddPopupButton = ({ open }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button type="button" className="profile__add-button"
                    onClick={() => setIsOpen(!isOpen)}></button>
            {isOpen && <AddPopup />}
        </div>
    );
};

export default AddPopupButton;