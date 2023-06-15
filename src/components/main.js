import React,{useState} from 'react';
import ProfilePopupButton from "./ProfilePopupButton.js";
import AvatarPopupButton from "./AvatarPopupButton";
import AddPopupButton from "./AddPopupButton";
import ProfilePopup from "./ProfilePopup";


const Main = () => {
    const [modalActive, setModalActive] = useState(true);
        return (
            <main className="main">
            <section className="profile">
                <div className="profile__info-conteiner">
                    <img src="#" alt="Жак Кусто" className="profile__avatar"></img>
                    <AvatarPopupButton/>
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <ProfilePopupButton active={modalActive} setActive={setModalActive}/>
                    <p className="profile__info">Исследователь океана</p>
                </div>
                <AddPopupButton/>
            </section>
            <ul className="elements">

            </ul>
                <ProfilePopup active={modalActive} setActive={setModalActive}/>
        </main>
        )    
}

export default Main;