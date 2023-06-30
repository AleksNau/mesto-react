import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function SubmitPopup({isOpen, name, onClose,onDelete,card}) {
    return (
        <PopupWithForm
            isOpen={isOpen}
            name={name}
            buttonValue={"Да"}
            onClose={onClose}
            onSubmit={onDelete}
            children={
                <>
                    <legend className="popup__title popup__title_remove">Вы уверены?</legend>
                </>
            }
        />
    )
}