import React from 'react';
import myContext from '../contexts/CurrentUserContext';


export default function Card({
                                 likes,
                                 isOpen,
                                 setActive,
                                 cardForPop,
                                 getCard,
                                 onCardLike,
                                 handleDeleteClick
                             }) {
    const user = React.useContext(myContext);
    const isOwn = cardForPop.owner._id === user._id;
    const isLiked = cardForPop.likes.some(i => i._id === user._id);
    const cardLikeButtonClassName = (
        `elements__like ${isLiked && 'elements__like_active'}`
    );
    ;
    return (
        <li className="elements__item">
            <img src={cardForPop.link} alt={cardForPop.name} className="elements__image" onClick={() => {
                getCard(cardForPop);
            }}/>
            <div className="elements__info">
                <p className="elements__text">{cardForPop.name}</p>
                <div className="elements__like-container">
                    <button type="button" className={cardLikeButtonClassName} onClick={() => onCardLike(cardForPop)}/>
                    <p className="elements__like-counter">{likes}</p>
                </div>
                {isOwn && <button type="button" className="elements__delete" onClick={() => {
                    setActive(!isOpen);
                    handleDeleteClick(cardForPop)
                }}/>}
            </div>
        </li>
    )
}