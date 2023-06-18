import React from 'react';

import CloseButton from "./CloseButton";

export default function PopupWithForm({isOpen, setActive, form, popupName}) {
    return (
        <div className={isOpen ? `popup popup_opened ${popupName}` :`popup ${popupName}`} onClick={() => setActive(false)}>
            <CloseButton setActive={setActive}/>
            <div className="popup__conteiner" onClick={event => event.stopPropagation()}>
                {form}
            </div>
        </div>
    )
}