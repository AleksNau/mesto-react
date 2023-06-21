import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddCardPopup({isOpen,setActive,name}) {
    return (
        <PopupWithForm
        isOpen={isOpen}
        setActive={setActive}
        name={name}
        buttonValue={"Создать"}
        children={
            <>
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
            </>
        }
        />
    )
}