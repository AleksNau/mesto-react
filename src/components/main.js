import React, {useState} from 'react';
import Card from "./Card";



const Main = ({
                  cards,
                  profile,
                  isPopupSubmit,
                  onEditAvatar,
                  onEditProfile,
                  onAddPlace,
                  onSubmitDelete,
                  setImageOpen,
                  handleCardClick,
                  handleCardName
              }) => {




    return (
        <main className="main">
            <section className="profile">
                <div className="profile__info-conteiner">
                    <img src={profile.avatar} alt="Жак Кусто" className="profile__avatar"></img>
                    <button className="profile__avatar-button" onClick={() => {
                        onEditAvatar(true);
                        }}>
            <a href="#" className="profile__avatar-icon"></a>
        </button>
                    <h1 className="profile__name">{profile.name}</h1>
                    <button type="button" className="profile__edit-button" onClick={() => {
                        onEditProfile(true);
                        }}></button>
                    <p className="profile__info">{profile.about}</p>
                </div>
            <button type="button" className="profile__add-button"
                    onClick={() => {
                        onAddPlace(true);
                        }}></button>
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
                    />
                ))}
            </ul>

            
        </main>
    )
}

export default Main;