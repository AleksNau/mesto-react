import React,{useState} from 'react';
import ProfilePopupButton from "./ProfilePopupButton.js";
import AvatarPopupButton from "./AvatarPopupButton";
import AddPopupButton from "./AddPopupButton";
import ProfilePopup from "./popups/ProfilePopup";
import AvatarPopup from "./popups/AvatarPopup";
import AddPopup from "./popups/AddPopup";
import PopupWithForm from "./PopupWithForm";
import AddForm from "./AddForm";
import AvatarForm from "./AvatarForm";
import ProfileForm from "./ProfileForm";
import Card from "./Card";
import ImagePopup from "./ImagePopup";


const Main = ({cards,profile}) => {
    /*const [isEditProfilePopupOpen, setModalActive] = useState(false);
    const [isEditAvatarPopupOpen, setModalActiveAvatar] = useState(false);
    const [isAddPlacePopupOpen, setModalActiveAdd] = useState(false);
    const [isTitle, setTitle] = useState("");*/
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [form, setForm] = useState(AddForm);
    //popup картинки
    const [isImageOpen, setImageOpen] = useState(false);
    const [selectedImage, handleCardClick ] = useState([]);
    const [selectedName, handleCardName ] = useState([]);
        return (
            <main className="main">
            <section className="profile">
                <div className="profile__info-conteiner">
                    <img src={profile.avatar} alt="Жак Кусто" className="profile__avatar"></img>
                    <AvatarPopupButton setActive={setPopupOpen} setPopupForm ={setForm} form={AvatarForm}/>
                    <h1 className="profile__name">{profile.name}</h1>
                    <ProfilePopupButton setActive={setPopupOpen} setPopupForm ={setForm} form={ProfileForm}/>
                    <p className="profile__info">{profile.about}</p>
                </div>
                <AddPopupButton setActive={setPopupOpen} setPopupForm ={setForm} form={ProfileForm}/>
            </section>
            <ul className="elements">
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        src = {card.link}
                        name={card.name}
                        likes={card.likes.length}
                        activeImage={handleCardClick}
                        active={setImageOpen}
                        setName={handleCardName}
                    />
                ))}
            </ul>
                <PopupWithForm active={isPopupOpen} setActive={setPopupOpen} form={form}/>
                <ImagePopup active={isImageOpen} setActive={setImageOpen} image={selectedImage} name={selectedName}/>
            </main>
        )    
}

export default Main;