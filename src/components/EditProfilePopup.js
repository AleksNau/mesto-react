import React from 'react';
import PopupWithForm from './PopupWithForm';
import myContext from '../contexts/CurrentUserContext';

export default function EditProfilePopup({isOpen, popupName, onClose}) {
    const currentUser = React.useContext(myContext);
    const { name, about } = currentUser;
    const [profileName, setProfileName] = React.useState("");
    const [profileDescription , setProfileDescription] = React.useState("");

    React.useEffect(() => {
        if (isOpen) {
          setProfileName(name);
          setProfileDescription(about);
        }
      }, [isOpen, currentUser]);

    function handleNameChange(e) {
        setProfileName(e.target.value);
      }
      // input change
      function handleDescriptionChange(e) {
        setProfileDescription(e.target.value);
      }

      function handleSubmit(e) {
  e.preventDefault();
  // Передаём значения управляемых компонентов во внешний обработчик
  props.onUpdateUser({
    name:profileName,
    about: profileDescription,
  });
}

    return (
        <PopupWithForm
            isOpen={isOpen}
            onSubmit={handleSubmit}
            name={popupName}
            buttonValue={"Сохранить"}
            onClose={onClose}
            children={
                <>
                    <legend className="popup__title">Редактировать профиль</legend>
                    <label>
                        <input name="Name" id="name" type="text" className="popup__input popup__input_type_name"
                               minLength="2" maxLength="40" required/>
                        <span id="name-error" className="popup__error">&nbsp;</span>
                    </label>
                    <label>
                        <input name="Info" id="info" type="text" className="popup__input popup__input_type_info"
                               minLength="2" maxLength="200" required/>
                        <span id="info-error" className="popup__error">&nbsp;</span>
                    </label>
                </>
            }
        />
    )
}