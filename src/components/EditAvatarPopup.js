import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({isOpen, setActive, name,onClose}) {
    return (
        <PopupWithForm
            isOpen={isOpen}
            setActive={setActive}
            name={name}
            buttonValue={"Сохранить"}
            onClose={onClose}
            children={
                <>
                    <legend className="popup__title">Обновить аватар</legend>
                    <label>
                        <input name="link" id="avatar-link" type="url"
                               className="popup__input popup__input_type_image-link" placeholder="Ссылка на аватар"
                               required/>
                        <span id="avatar-link-error" className="popup__error"></span>
                    </label>
                </>
            }
        />
    )
}