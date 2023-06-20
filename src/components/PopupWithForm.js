import React from 'react';

export default function PopupWithForm({isOpen, children, popupName,setActive}) {
    return (
        <div className={isOpen ? `popup popup_opened ${popupName}` :`popup ${popupName}`} onClick={() => {setActive(false)}}>
            <div className="popup__conteiner" onClick={event => event.stopPropagation()}>
                <button type="button" className="popup__close-button" onClick={() => {setActive(false)}}></button>
            <form name="create_card-form" className="popup__form popup__form_add" id="create_card-form" method="post"
              noValidate>
            <fieldset className="popup__fieldset">
                {children}
                <button type="submit" className="popup__submit" form="create_card-form"
                        value="Сохранить изменения">Создать</button>
            </fieldset>
        </form>
            </div>
        </div>
    )
}