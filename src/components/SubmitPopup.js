import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function SubmitPopup({isOpen,setActive,name}) {
    return (
        <PopupWithForm
        isOpen={isOpen}
        setActive={setActive}
        name={name}
        buttonValue={"Да"}
        children={
            <>
                <legend className="popup__title popup__title_remove">Вы уверены?</legend>
            </>
        }
        />
    )
}