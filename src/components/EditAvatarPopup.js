import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({isOpen,setActive,name}) {
    return (
        <PopupWithForm
        isOpen={isOpen}
        setActive={setActive}
        name={name}
        buttonValue={"Сохранить"}
        children={
            <>
            <legend className="popup__title">Обновить аватар</legend>
                <label>
                    <input name="link" id="avatar-link" type="url"
                           className="popup__input popup__input_type_image-link" placeholder="Ссылка на аватар"
                           required></input>
                    <span id="avatar-link-error" className="popup__error"></span>
                </label>
            </>
        }
        />
    )
}