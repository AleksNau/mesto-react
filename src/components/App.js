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
import loadingText from '../contexts/loadingContext';

const App = () => {
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    //обработчики попапов
    const [isPopupAvatar, setPopupAvatar] = useState(false);
    const [isEditProfilePopupOpen, setPopupProfile] = useState(false);
    const [isAddPlacePopupOpen, setPopupAdd] = useState(false);
    const [isSubmitPopupOpen, setPopupSubmit] = useState(false);

    //пр11 начало
    const [cardToDelete, setCardToDelete] = useState({});
    //установить карточку
    const [selectedCard, handleCardClick] = useState({});
    //обработчик загрузки
    const [isLoading, setIsLoading] = useState(false);

    function closeAllPopups() {
        setPopupAvatar(false);
        setPopupProfile(false);
        setPopupAdd(false);
        setPopupSubmit(false);
        handleCardClick({});
    }

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        if (!isLiked){
            api.putLike(card._id, !isLiked).then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            });
        }else {
            api
                .deleteLike(card._id, !isLiked)
                .then((newCard) => {
                    setCards((state) =>
                        state.map((c) => (c._id === card._id ? newCard : c))
                    );
                })
                .catch((err) => console.log(err));
        }
    }

    function handleCardDelete(card) {
        setIsLoading(true);
        api.deleteCard(card._id)
            .then((newCard) => {
                const newCards = cards.filter((c) =>
                    c._id === card._id ? "" : newCard
                );
                setCards(newCards);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(()=>{
                setIsLoading(false);
                closeAllPopups()})
    }

    function handleUpdateUser(data) {
        setIsLoading(true);
        api
            .setName(data)
            .then((newUser) => {
                setCurrentUser(newUser);
                closeAllPopups();
            })
            .catch((err) => console.log(err))
            .finally(()=> setIsLoading(false))
    }

    function handleUpdateAvatar(data) {
        setIsLoading(true);
        api
            .sendAvatar(data.avatar)
            .then((newAvatar) => {
                setCurrentUser(newAvatar);
                closeAllPopups();
            })
            .catch((err) => console.log(err))
            .finally(()=> setIsLoading(false))
    }

    function handleAddPlaceSubmit(data) {
        setIsLoading(true);
        api
            .newCard(data.name,data.link)
            .then((newCard)=> {
                setCards([newCard, ...cards]); 
                closeAllPopups();
            })
            .catch((err) => console.log(err))
            .finally(()=> setIsLoading(false))
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
            <loadingText.Provider value={isLoading}>
            <myContext.Provider value={currentUser}>
            
                <div className="page">

                    <Header/>
                    <Main
                        cards={cards}
                        isPopupSubmit={isSubmitPopupOpen}
                        handleEditAvatarClick={setPopupAvatar}
                        handleEditProfileClick={setPopupProfile}
                        onSubmitDelete={setPopupSubmit}
                        handleAddPlaceClick={setPopupAdd}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                        setCardToDelete={setCardToDelete}
                    />
                    <Footer/>
                </div>
                
                <AddCardPopup 
                isOpen={isAddPlacePopupOpen} 
                name={"add"} 
                onClose={closeAllPopups}
                onAddPlace ={handleAddPlaceSubmit}
                />
                <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                popupName={"profile"}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
                    />
                <EditAvatarPopup 
                isOpen={isPopupAvatar}
                name={"avatar"}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
                />
                <SubmitPopup isOpen={isSubmitPopupOpen} name={"remove"} onClose={closeAllPopups} onDelete={handleCardDelete} cardToDelete={cardToDelete}/>
                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
                
            </myContext.Provider>
            </loadingText.Provider>
        </div>

    );
}

export default App;
