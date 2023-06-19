import React from 'react';
import CloseButton from "./CloseButton";

export default function RemoveForm() {
    return (
        <form name="remove-form" className="popup__form popup__form_remove" id="remove-form" method="post"
                      noValidate>
                    
                    <fieldset className="popup__fieldset">
                        <legend className="popup__title popup__title_remove">Вы уверены?</legend>
                        <button type="submit" className="popup__submit" form="remove-form"
                                value="Удалить картинку">Да</button>
                    </fieldset>
                </form>
    )
}