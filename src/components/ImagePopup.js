import React from 'react';

export default function ImagePopup({isOpen, setActive,card}) {

    return (
        <div className={isOpen ? "popup popup_opened" : "popup"} onClick={() => setActive(false)}>
            <div className="popup__conteiner-zoom" onClick={event => event.stopPropagation()}>
                <button type="button" className="popup__close-button" onClick={() => setActive(false)}></button>
                <img src={card.link} alt={card.name} className="popup__image"></img>
                <p className="popup__place-name">{card.name}</p>
            </div>
        </div>
    )
}