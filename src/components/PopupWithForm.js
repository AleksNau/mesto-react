import React from 'react';

import CloseButton from "./CloseButton";

export default function PopupWithForm({active, setActive, form}) {
    return (
        <div className={active ? "popup popup_opened" :"popup"} onClick={() => setActive(false)}>
            <div className="popup__conteiner" onClick={event => event.stopPropagation()}>
                <CloseButton setActive={setActive}/>
                {form}
            </div>
        </div>
    )
}