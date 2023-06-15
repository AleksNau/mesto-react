import React from 'react';
import ProfilePopupButton from "./ProfilePopupButton.js";
import AvatarPopupButton from "./AvatarPopupButton";
import AddPopupButton from "./AddPopupButton";

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
                    <AvatarPopupButton/>
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <ProfilePopupButton/>
                    <p className="profile__info">Исследователь океана</p>
                </div>
                <AddPopupButton/>
            </section>
            <ul className="elements">

            </ul>
        </main>
        )    
}

export default Main;