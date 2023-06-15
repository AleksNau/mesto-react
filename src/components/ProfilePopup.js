import React, {useState} from 'react';
import CloseButton from "./CloseButton";

export default function ProfilePopup() {

    return (
        <div className="popup popup_profile popup_opened">
            <div className="popup__conteiner">
                <form name="profile-form" className="popup__form popup__form_profile" method="post" noValidate>
                    <CloseButton />
                    <fieldset className="popup__fieldset">
                        <legend className="popup__title">Редактировать профиль</legend>
                        <label>
                            <input name="Name" id="name" type="text" className="popup__input popup__input_type_name"
                                   minLength ="2" maxLength="40" required></input>
                            <span id="name-error" className="popup__error">&nbsp;</span>
                        </label>
                        <label>
                            <input name="Info" id="info" type="text" className="popup__input popup__input_type_info"
                                   minLength ="2" maxLength="200" required></input>
                            <span id="info-error" className="popup__error">&nbsp;</span>
                        </label>
                        <button type="submit" className="popup__submit">Сохранить</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}