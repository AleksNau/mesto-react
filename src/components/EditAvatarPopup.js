import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({isOpen, name, onClose,onUpdateAvatar}) {
    const imageLink = React.useRef();
    function handleSubmit() {
        onUpdateAvatar({
            avatar: imageLink.current.value,
        });
    }
    return (
        <PopupWithForm
            isOpen={isOpen}
            name={name}
            buttonValue={"Сохранить"}
            onClose={onClose}
            onSubmit={handleSubmit}
            children={
                <>
                    <legend className="popup__title">Обновить аватар</legend>
                    <label>
                        <input name="link"
                               ref={imageLink}
                               id="avatar-link"
                               type="url"
                               className="popup__input popup__input_type_image-link" placeholder="Ссылка на аватар"
                               required/>
                        <span id="avatar-link-error" className="popup__error"></span>
                    </label>
                </>
            }
        />
    )
}