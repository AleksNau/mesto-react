import React, {useState} from 'react';
import ProfilePopupButton from "./ProfilePopupButton.js";
import AvatarPopupButton from "./AvatarPopupButton";
import AddPopupButton from "./AddPopupButton";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";
import ImagePopup from "./ImagePopup";


const Main = ({
                  cards,
                  profile,
                  isPopupSubmit,
                  onEditAvatar,
                  onEditProfile,
                  onAddPlace,
                  onSubmitDelete,
                  handlePopupName
              }) => {

    //popup картинки
    const [isImageOpen, setImageOpen] = useState(false);
    const [selectedImage, handleCardClick] = useState([]);
    const [selectedName, handleCardName] = useState([]);


    return (
        <main className="main">
            <section className="profile">
                <div className="profile__info-conteiner">
                    <img src={profile.avatar} alt="Жак Кусто" className="profile__avatar"></img>
                    <AvatarPopupButton handleEditAvatarClick={onEditAvatar} handlePopupName={handlePopupName}/>
                    <h1 className="profile__name">{profile.name}</h1>
                    <ProfilePopupButton handleEditProfileClick={onEditProfile} handlePopupName={handlePopupName}/>
                    <p className="profile__info">{profile.about}</p>
                </div>
                <AddPopupButton handleAddPlaceClick={onAddPlace} handlePopupName={handlePopupName}/>
            </section>
            <ul className="elements">
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        src={card.link}
                        name={card.name}
                        likes={card.likes.length}
                        activeImage={handleCardClick}
                        active={setImageOpen}
                        setName={handleCardName}
                        isOpen={isPopupSubmit}
                        setActive={onSubmitDelete}
                        handlePopupName={handlePopupName}
                    />
                ))}
            </ul>

            <PopupWithForm/>
            <ImagePopup isOpen={isImageOpen} setActive={setImageOpen} image={selectedImage} name={selectedName}/>
        </main>
    )
}

export default Main;