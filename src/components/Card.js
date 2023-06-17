import React from 'react';


export default function Card({_id,src,name}) {
    return (
        <li className="elements__item">
            <img src={src} alt={name} className="elements__image"></img>
            <div className="elements__info">
                <p className="elements__text">{name}</p>
                <div className="elements__like-container">
                    <button type="button" className="elements__like"></button>
                    <p className="elements__like-counter"></p>
                </div>
                <button type="button" className="elements__delete"></button>
            </div>
        </li>
    )
}