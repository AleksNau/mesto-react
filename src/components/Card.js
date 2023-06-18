import React from 'react';


export default function Card({_id,src,name,likes,active,activeImage,setName}) {
    return (
        <li className="elements__item">
            <img src={src} alt={name} className="elements__image" onClick={()=> {
                activeImage(src);
                active(true);
                setName(name)
            }}></img>
            <div className="elements__info">
                <p className="elements__text">{name}</p>
                <div className="elements__like-container">
                    <button type="button" className="elements__like"></button>
                    <p className="elements__like-counter">{likes}</p>
                </div>
                <button type="button" className="elements__delete"></button>
            </div>
        </li>
    )
}