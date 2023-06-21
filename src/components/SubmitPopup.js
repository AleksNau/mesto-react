import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function SubmitPopup({isOpen, setActive, name,onClose}) {
    return (
        <PopupWithForm
            isOpen={isOpen}
            setActive={setActive}
            name={name}
            buttonValue={"Да"}
            onClose={onClose}
            children={
                <>
                    <legend className="popup__title popup__title_remove">Вы уверены?</legend>
                </>
            }
        />
    )
}