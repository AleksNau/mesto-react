import React from "react";
import PopupWithForm from "./PopupWithForm";
import currentUserContext from "../contexts/CurrentUserContext";
import loadingText from "../contexts/loadingContext";

export default function EditProfilePopup({
  onUpdateUser,
  isOpen,
  popupName,
  onClose,
}) {
  const currentUser = React.useContext(currentUserContext);
  const { name, about } = currentUser;
  const [profileName, setProfileName] = React.useState("");
  const [profileDescription, setProfileDescription] = React.useState("");
  const isLoading = React.useContext(loadingText);

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

  function handleSubmit() {
    onUpdateUser({
      Name: profileName,
      Info: profileDescription,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name={popupName}
      buttonValue={isLoading ? "Сохранение..." : "Сохранить"}
      onClose={onClose}
      tittle={"Редактировать профиль"}
      children={
        <>
          <label>
            <input
              name="Name"
              id="name"
              type="text"
              className="popup__input popup__input_type_name"
              minLength="2"
              maxLength="40"
              value={profileName}
              onChange={(e) => handleNameChange(e)}
              required
            />
            <span id="name-error" className="popup__error">
              &nbsp;
            </span>
          </label>
          <label>
            <input
              name="Info"
              id="info"
              type="text"
              className="popup__input popup__input_type_info"
              minLength="2"
              maxLength="200"
              value={profileDescription}
              onChange={(e) => handleDescriptionChange(e)}
              required
            />
            <span id="info-error" className="popup__error">
              &nbsp;
            </span>
          </label>
        </>
      }
    />
  );
}
