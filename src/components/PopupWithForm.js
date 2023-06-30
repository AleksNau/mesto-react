import React,{useState} from 'react';

export default function PopupWithForm({isOpen, children, name, buttonValue, onClose, onSubmit}) {
    const [isLoading, setValueLoading] = useState(false);
    return (
        <div className={isOpen ? `popup popup_${name} popup_opened ` : `popup`} onClick={() => {
            onClose();
        }}>
            <div className="popup__conteiner" onClick={event => event.stopPropagation()}>
                <button type="button" className="popup__close-button" onClick={() => {
                    onClose();
                }}/>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    setValueLoading(!isLoading)
                    onSubmit(event);
                    setValueLoading(!isLoading)
                
                }} name={`${name}-form`} className={`popup__form popup__form_${name}`} id={`${name}-form`}
                      method="post"
                      noValidate>
                    <fieldset className="popup__fieldset">
                        
                        {children}
                        <button type="submit" className="popup__submit" form={`${name}-form`}
                                value="Сохранить изменения">{isLoading ? 'Сохранение...': "Сохранить"}</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}