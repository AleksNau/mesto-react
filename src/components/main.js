import React,{useState} from 'react';
import ProfilePopupButton from "./ProfilePopupButton.js";
import AvatarPopupButton from "./AvatarPopupButton";
import AddPopupButton from "./AddPopupButton";
import ProfilePopup from "./ProfilePopup";
import AvatarPopup from "./AvatarPopup";
import AddPopup from "./AddPopup";
import PopupWithForm from "./PopupWithForm";


const Main = () => {
    const [isEditProfilePopupOpen, setModalActive] = useState(false);
    const [isEditAvatarPopupOpen, setModalActiveAvatar] = useState(false);
    const [isAddPlacePopupOpen, setModalActiveAdd] = useState(false);
    const [isAddPlacePopupOpen2, setModalActiveAdd2] = useState(false);
    const [isTitle, setTitle] = useState("");
        return (
            <main className="main">
            <section className="profile">
                <div className="profile__info-conteiner">
                    <img src="#" alt="Жак Кусто" className="profile__avatar"></img>
                    <AvatarPopupButton active={isEditAvatarPopupOpen} setActive={setModalActiveAvatar}/>
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <ProfilePopupButton active={isEditProfilePopupOpen} setActive={setModalActive}/>
                    <p className="profile__info">Исследователь океана</p>
                </div>
                <AddPopupButton active={isAddPlacePopupOpen} setActive={setModalActiveAdd}/>
                <AddPopupButton setActive={setModalActiveAdd2} title="figna figna" setTitle={setTitle}/>
            </section>
            <ul className="elements">

            </ul>
                <ProfilePopup active={isEditProfilePopupOpen} setActive={setModalActive}/>
                <AvatarPopup active={isEditAvatarPopupOpen} setActive={setModalActiveAvatar}/>
                <AddPopup active={isAddPlacePopupOpen} setActive={setModalActiveAdd}/>
                <PopupWithForm active={isAddPlacePopupOpen2} setActive={setModalActiveAdd2} title={isTitle}/>
        </main>
        )    
}

export default Main;