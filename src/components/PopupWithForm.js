import React,{useState} from 'react';

import CloseButton from "./CloseButton";

export default function PopupWithForm({isOpen, setActive, form, popupName}) {
    return (
        <div className={isOpen ? `popup popup_opened ${popupName}` :`popup ${popupName}`} onClick={() => setActive(false)}>
            <div className="popup__conteiner" onClick={event => event.stopPropagation()}>
                <button type="button" className="popup__close-button" onClick={() => setActive(false)}></button>
                {form}
            </div>
        </div>
    )
}