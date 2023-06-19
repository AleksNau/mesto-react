import React from 'react';
import CloseButton from "./CloseButton";

export default function AddForm() {
    return (
        <form name="create_card-form" className="popup__form popup__form_add" id="create_card-form" method="post"
              noValidate>
            <fieldset className="popup__fieldset">
                <legend className="popup__title">Новое место</legend>
                <label>
                    <input name="name" id="place" type="text" className="popup__input popup__input_type_place"
                           placeholder="Название" minLength ="2" maxLength="30" required></input>
                    <span id="place-error" className="popup__error"></span>
                </label>
                <label>
                    <input name="link" id="image-link" type="url"
                           className="popup__input popup__input_type_image-link" placeholder="Ссылка на картинку"
                           required></input>
                    <span id="image-link-error" className="popup__error"></span>
                </label>
                <button type="submit" className="popup__submit" form="create_card-form"
                        value="Сохранить изменения">Создать</button>
            </fieldset>
        </form>
    )
}