import React from 'react';
const popupProfile = document.querySelector('.popup_profile');
const popupElementAddNewCard = document.querySelector(".popup_add");
const popupAvatar = document.querySelector(".popup_avatar");
function handleEditAvatarClick() {
    document.querySelector(".popup_avatar").classList.add("popup_is-opened");
}

function handleEditProfileClick() {
    document.querySelector('.popup_profile').classList.add("popup_is-opened");
}

function handleAddPlaceClick() {
    document.querySelector(".popup_add").classList.add("popup_is-opened");
}
const Main = () => {    
        return (
            <main className="main">
            <section className="profile">
                <div className="profile__info-conteiner">
                    <img src="#" alt="Жак Кусто" className="profile__avatar"></img>
                    <button className="profile__avatar-button"
                            onClick={handleEditAvatarClick}>
                        <a href="#" className="profile__avatar-icon"></a>
                    </button>
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button type="button" className="profile__edit-button"
                            onClick={handleEditProfileClick}></button>
                    <p className="profile__info">Исследователь океана</p>
                </div>
                <button type="button" className="profile__add-button"
                        onClick={handleAddPlaceClick}></button>
            </section>
            <ul className="elements">

            </ul>
        </main>
        )    
}

export default Main;