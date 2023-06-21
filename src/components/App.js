import React, {useState} from 'react';
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
    const [currentUser, setCurrentUser] = useState({});
    //обработчики попапов
    const [isPopupAvatar, setPopupAvatar] = useState(false);
    const [isEditProfilePopupOpen, setPopupProfile] = useState(false);
    const [isAddPlacePopupOpen, setPopupAdd] = useState(false);
    const [isSubmitPopupOpen, setPopupSubmit] = useState(false);
    //установка нужного имени формы и попапа
    //popup картинки
    const [isImageOpen, setImageOpen] = useState(false);

    //установить карточку
    const [selectedCard, handleCardClick] = useState([]);

    function closeAllPopups() {
        setPopupAvatar(false);
        setPopupProfile(false);
        setPopupAdd(false);
        setPopupSubmit(false);
        setImageOpen(false)
        handleCardClick([]);
    }

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
                    isPopupSubmit={isSubmitPopupOpen}
                    handleEditAvatarClick={setPopupAvatar}
                    handleEditProfileClick={setPopupProfile}
                    onSubmitDelete={setPopupSubmit}
                    handleAddPlaceClick={setPopupAdd}
                    setImageOpen={setImageOpen}
                    onCardClick={handleCardClick}
                />
                <Footer/>
            </div>
            <AddCardPopup isOpen={isAddPlacePopupOpen} setActive={setPopupAdd} name={"add"} onClose={closeAllPopups}/>
            <EditProfilePopup isOpen={isEditProfilePopupOpen} setActive={setPopupProfile} name={"profile"} onClose={closeAllPopups}/>
            <EditAvatarPopup isOpen={isPopupAvatar} setActive={setPopupAvatar} name={"avatar"} onClose={closeAllPopups}/>
            <SubmitPopup isOpen={isSubmitPopupOpen} setActive={setPopupSubmit} name={"remove"} onClose={closeAllPopups}/>
            <ImagePopup isOpen={isImageOpen} setActive={setImageOpen} card={selectedCard} getCard={handleCardClick} onClose={closeAllPopups}/>
        </div>
    );
}

export default App;
