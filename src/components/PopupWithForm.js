import React from 'react';

import CloseButton from "./CloseButton";

export default function PopupWithForm({active, setActive, form, popupName}) {
    return (
        <div className={active ? `popup popup_opened ${popupName}` :`popup ${popupName}`} onClick={() => setActive(false)}>
            <CloseButton active={active} setActive={setActive}/>
            <div className="popup__conteiner" onClick={event => event.stopPropagation()}>
                {form}
            </div>
        </div>
    )
}