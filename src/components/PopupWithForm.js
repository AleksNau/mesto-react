import React from 'react';

export default function PopupWithForm({isOpen, children, name, setActive, buttonValue}) {
    return (
        <div className={isOpen ? `popup popup_${name} popup_opened ` : `popup`} onClick={() => {
            setActive(false);
        }}>
            <div className="popup__conteiner" onClick={event => event.stopPropagation()}>
                <button type="button" className="popup__close-button" onClick={() => {
                    setActive(false);
                }}/>
                <form name="create_card-form" className={`popup__form popup__form_${name}`} id="create_card-form"
                      method="post"
                      noValidate>
                    <fieldset className="popup__fieldset">
                        {children}
                        <button type="submit" className="popup__submit" form="create_card-form"
                                value="Сохранить изменения">{buttonValue}</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}