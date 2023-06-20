import React,{useState} from 'react';
import ProfilePopupButton from "./ProfilePopupButton.js";
import AvatarPopupButton from "./AvatarPopupButton";
import AddPopupButton from "./AddPopupButton";
import PopupWithForm from "./PopupWithForm";
import AddForm from "./AddForm";
import AvatarForm from "./AvatarForm";
import ProfileForm from "./ProfileForm";
import RemoveForm from './RemoveForm.js';
import Card from "./Card";
import ImagePopup from "./ImagePopup";



const Main = ({cards,profile,isPopupOpen,setPopupOpen,onEditAvatar,onEditProfile,onAddPlace}) => {
    //установка нужной формы
    const [form, setForm] = useState(AddForm);
    //popup картинки
    const [isImageOpen, setImageOpen] = useState(false);
    const [selectedImage, handleCardClick ] = useState([]);
    const [selectedName, handleCardName ] = useState([]);
    //установка нужного имени формы и попапа
    const [popupName, handlePopupName ] = useState("");

    function closeAllPopups() {
        setImageOpen(false);
        setPopupOpen(false);
        selectedImage(null)
      }

        return (
            <main className="main">
            <section className="profile">
                <div className="profile__info-conteiner">
                    <img src={profile.avatar} alt="Жак Кусто" className="profile__avatar"></img>
                    <AvatarPopupButton handleEditAvatarClick={onEditAvatar} setPopupForm ={setForm} form={AvatarForm} handlePopupName={handlePopupName}/>
                    <h1 className="profile__name">{profile.name}</h1>
                    <ProfilePopupButton handleEditProfileClick={onEditProfile} setPopupForm ={setForm} form={ProfileForm} handlePopupName={handlePopupName}/>
                    <p className="profile__info">{profile.about}</p>
                </div>
                <AddPopupButton handleAddPlaceClick={onAddPlace} setPopupForm ={setForm} form={AddForm} handlePopupName={handlePopupName}/>
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
                        isOpen={isPopupOpen}
                        setActive={setPopupOpen}
                        form={RemoveForm}
                        setPopupForm ={setForm}
                    />
                ))}
            </ul>

            <PopupWithForm />
            <ImagePopup isOpen={isImageOpen} setActive={setImageOpen} image={selectedImage} name={selectedName}/>
            </main>
        )    
}

export default Main;