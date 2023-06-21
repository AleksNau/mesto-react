import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup({isOpen, name, onClose}) {
    return (
        <PopupWithForm
            isOpen={isOpen}
            name={name}
            buttonValue={"Сохранить"}
            onClose={onClose}
            children={
                <>
                    <legend className="popup__title">Редактировать профиль</legend>
                    <label>
                        <input name="Name" id="name" type="text" className="popup__input popup__input_type_name"
                               minLength="2" maxLength="40" required/>
                        <span id="name-error" className="popup__error">&nbsp;</span>
                    </label>
                    <label>
                        <input name="Info" id="info" type="text" className="popup__input popup__input_type_info"
                               minLength="2" maxLength="200" required/>
                        <span id="info-error" className="popup__error">&nbsp;</span>
                    </label>
                </>
            }
        />
    )
}