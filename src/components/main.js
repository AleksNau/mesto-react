import React,{useState} from 'react';
import ProfilePopupButton from "./ProfilePopupButton.js";
import AvatarPopupButton from "./AvatarPopupButton";
import AddPopupButton from "./AddPopupButton";
import ProfilePopup from "./ProfilePopup";
import AvatarPopup from "./AvatarPopup";
import AddPopup from "./AddPopup";


const Main = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalActiveAvatar, setModalActiveAvatar] = useState(false);
    const [modalActiveAdd, setModalActiveAdd] = useState(false);
        return (
            <main className="main">
            <section className="profile">
                <div className="profile__info-conteiner">
                    <img src="#" alt="Жак Кусто" className="profile__avatar"></img>
                    <AvatarPopupButton active={modalActiveAvatar} setActive={setModalActiveAvatar}/>
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <ProfilePopupButton active={modalActive} setActive={setModalActive}/>
                    <p className="profile__info">Исследователь океана</p>
                </div>
                <AddPopupButton active={modalActiveAdd} setActive={setModalActiveAdd}/>
            </section>
            <ul className="elements">

            </ul>
                <ProfilePopup active={modalActive} setActive={setModalActive}/>
                <AvatarPopup active={modalActiveAvatar} setActive={setModalActiveAvatar}/>
                <AddPopup active={modalActiveAdd} setActive={setModalActiveAdd}/>
        </main>
        )    
}

export default Main;