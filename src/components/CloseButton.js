import React,{useState} from 'react';
import ProfilePopup from "./ProfilePopup";


const CloseButton = ({  }) => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    return (
        <div>
            <button type="button"  className="popup__close-button" onClick={handleClose}></button>

        </div>
    );
};

export default CloseButton;