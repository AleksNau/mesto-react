import React, {useEffect, useState} from 'react';
import '../index.css';
import Footer from './footer.js';
import Header from './header.js';
import Main from './main.js';
import api from "../utils/Api";
import AddCardPopup from './AddCardPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import SubmitPopup from './SubmitPopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';

const App = () => {
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = React.useState({});
    //открытие универсального попапа
    const [isPopupAvatar, setPopupAvatar] = useState(false);
    const [isPopupProfile, setPopupProfile] = useState(false);
    const [isPopupAdd, setPopupAdd] = useState(false);
    const [isPopupSubmit, setPopupSubmit] = useState(false);
    //установка нужного имени формы и попапа
    const [popupName, handlePopupName] = useState("");

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
                    handlePopupName={handlePopupName}/>
                <Footer/>
            </div>
            <AddCardPopup isOpen={isPopupAdd} setActive={setPopupAdd} name={popupName}></AddCardPopup>
            <EditProfilePopup isOpen={isPopupProfile} setActive={setPopupProfile} name={popupName}/>
            <EditAvatarPopup isOpen={isPopupAvatar} setActive={setPopupAvatar} name={popupName}/>
            <SubmitPopup isOpen={isPopupSubmit} setActive={setPopupSubmit} name={popupName}/>
        </div>
    );
}

export default App;
