import React from "react";

export default function ProfilePopup() {

    return (
        <div className="popup popup_remove">
            <div className="popup__conteiner">
                <form name="remove-form" className="popup__form popup__form_remove" id="remove-form" method="post"
                      noValidate>
                    <button type="button" className="popup__close-button"></button>
                    <fieldset className="popup__fieldset">
                        <legend className="popup__title popup__title_remove">Вы уверены?</legend>
                        <button type="submit" className="popup__submit" form="remove-form"
                                value="Удалить картинку">Да</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
