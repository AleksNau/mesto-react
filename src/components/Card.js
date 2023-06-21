import React from 'react';


export default function Card({
                                 _id,
                                 src,
                                 name,
                                 likes,
                                 active,
                                 activeImage,
                                 setName,
                                 isOpen,
                                 setActive,
                                 cardForPop,
                                 getCard
                             }) {
    return (
        <li className="elements__item">
            <img src={src} alt={name} className="elements__image" onClick={() => {
                activeImage(src);
                active(true);
                console.log(cardForPop);
                getCard(cardForPop);
                setName(name);
            }}></img>
            <div className="elements__info">
                <p className="elements__text">{name}</p>
                <div className="elements__like-container">
                    <button type="button" className="elements__like"></button>
                    <p className="elements__like-counter">{likes}</p>
                </div>
                <button type="button" className="elements__delete" onClick={() => {
                    setActive(!isOpen);
                }}></button>
            </div>
        </li>
    )
}