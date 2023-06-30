import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function SubmitPopup({isOpen, name, onClose,onDelete,cardToDelete}) {

    function handleSubmit() {
        // Передаём значения управляемых компонентов во внешний обработчик
        onDelete(cardToDelete);
    }
    return (
        <PopupWithForm
            isOpen={isOpen}
            name={name}
            buttonValue={"Да"}
            onClose={onClose}
            onSubmit={handleSubmit}
            children={
                <>
                    <legend className="popup__title popup__title_remove">Вы уверены?</legend>
                    <input className="popup__input_none"  name="input-submit" ></input>
                </>
            }
        />
    )
}