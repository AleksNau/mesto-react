import React, {useEffect, useState} from 'react';
import '../index.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import api from "../utils/Api";
import AddCardPopup from './AddCardPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import SubmitPopup from './SubmitPopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import ImagePopup from "./ImagePopup";

const App = () => {
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = React.useState({});
    //обработчики попапов
    const [isPopupAvatar, setPopupAvatar] = useState(false);
    const [isPopupProfile, setPopupProfile] = useState(false);
    const [isPopupAdd, setPopupAdd] = useState(false);
    const [isPopupSubmit, setPopupSubmit] = useState(false);
    //установка нужного имени формы и попапа
        //popup картинки
        const [isImageOpen, setImageOpen] = useState(false);
        const [selectedImage, handleCardClick] = useState([]);
        const [selectedName, handleCardName] = useState([]);

        //установить карточку
        const [card, getCard] = useState([]);

    React.useEffect(() => {
        Promise.all([api.getProfileInfo(), api.getCards()])
            .then(([info, cards]) => {
                setCurrentUser(info);
                setCards(cards);
            })
            .catch((err) => console.log(err));
    }, []);


    return (
        <div className="root">
            <div className="page">
                <Header/>
                <Main
                    cards={cards}
                    profile={currentUser}
                    isPopupSubmit={isPopupSubmit}
                    onEditAvatar={setPopupAvatar}
                    onEditProfile={setPopupProfile}
                    onSubmitDelete={setPopupSubmit}
                    onAddPlace={setPopupAdd}
                    setImageOpen={setImageOpen}
                    handleCardClick={handleCardClick}
                    handleCardName={handleCardName}
                    getCard={getCard}
                    />
                <Footer/>
            </div>
            <AddCardPopup isOpen={isPopupAdd} setActive={setPopupAdd} name={"add"}></AddCardPopup>
            <EditProfilePopup isOpen={isPopupProfile} setActive={setPopupProfile} name={"profile"}/>
            <EditAvatarPopup isOpen={isPopupAvatar} setActive={setPopupAvatar} name={"avatar"}/>
            <SubmitPopup isOpen={isPopupSubmit} setActive={setPopupSubmit} name={"remove"}/>
            <ImagePopup isOpen={isImageOpen} setActive={setImageOpen} card={card}/>
        </div>
    );
}

export default App;
