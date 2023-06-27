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
import myContext from "../contexts/CurrentUserContext";

const App = () => {
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    //обработчики попапов
    const [isPopupAvatar, setPopupAvatar] = useState(false);
    const [isEditProfilePopupOpen, setPopupProfile] = useState(false);
    const [isAddPlacePopupOpen, setPopupAdd] = useState(false);
    const [isSubmitPopupOpen, setPopupSubmit] = useState(false);

    //пр11 начало

    //установить карточку
    const [selectedCard, handleCardClick] = useState([]);

    function closeAllPopups() {
        setPopupAvatar(false);
        setPopupProfile(false);
        setPopupAdd(false);
        setPopupSubmit(false);
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
            <myContext.Provider value={currentUser}>
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
                    onCardClick={handleCardClick}
                />
                <Footer/>
            </div>
            <AddCardPopup isOpen={isAddPlacePopupOpen} name={"add"} onClose={closeAllPopups}/>
            <EditProfilePopup isOpen={isEditProfilePopupOpen} name={"profile"} onClose={closeAllPopups}/>
            <EditAvatarPopup isOpen={isPopupAvatar} name={"avatar"} onClose={closeAllPopups}/>
            <SubmitPopup isOpen={isSubmitPopupOpen} name={"remove"} onClose={closeAllPopups}/>
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            </myContext.Provider>
        </div>
        
    );
}

export default App;
