import React from 'react';
import PopupWithForm from './PopupWithForm';
import loadingText from '../contexts/loadingContext';


export default function SubmitPopup({isOpen, name, onClose,onDelete,cardToDelete}) {
    const load = React.useContext(loadingText);
    const {isLoading} = load;

    function handleSubmit() {
        // Передаём значения управляемых компонентов во внешний обработчик
        onDelete(cardToDelete);
    }
    return (
        <PopupWithForm
            isOpen={isOpen}
            name={name}
            buttonValue={isLoading ? "Сохранение..." : "Да"}
            onClose={onClose}
            onSubmit={handleSubmit}
            children={
                <>
                    <legend className="popup__title popup__title_remove">Вы уверены?</legend>
                </>
            }
        />
    )
}