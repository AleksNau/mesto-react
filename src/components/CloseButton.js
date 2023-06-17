import React from 'react';


const CloseButton = ({setActive}) => {
    return (
        <div>
            <button type="button"  className="popup__close-button" onClick={() => setActive(false)}></button>
        </div>
    );
};

export default CloseButton;