import React from 'react';


export default function Card({
                                 likes,
                                 active,
                                 isOpen,
                                 setActive,
                                 cardForPop,
                                 getCard
                             }) {
    return (
        <li className="elements__item">
            <img src={cardForPop.link} alt={cardForPop.name} className="elements__image" onClick={() => {
                active(true);
                getCard(cardForPop);
            }}></img>
            <div className="elements__info">
                <p className="elements__text">{cardForPop.name}</p>
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