import React from 'react';
import CloseButton from "../CloseButton";

export default function AvatarPopup({active, setActive}) {
    return (
        <div className={active ? "popup popup_opened" :"popup"} onClick={() => setActive(false)}>
            <div className="popup__conteiner" onClick={event => event.stopPropagation()}>
                <form name="create_card-form" className="popup__form popup__form_avatar" id="avatar-form" method="post"
                      noValidate>
                    <CloseButton setActive={setActive}/>
                    <fieldset className="popup__fieldset">
                        <legend className="popup__title">Обновить аватар</legend>
                        <label>
                            <input name="link" id="avatar-link" type="url"
                                   className="popup__input popup__input_type_image-link" placeholder="Ссылка на аватар"
                                   required></input>
                            <span id="avatar-link-error" className="popup__error"></span>
                        </label>
                        <button type="submit" className="popup__submit" form="avatar-form"
                                value="Обновить аватар">Сохранение...</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}