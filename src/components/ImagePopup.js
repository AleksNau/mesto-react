import CloseButton from "./CloseButton";

export default function ImagePopup({isOpen, setActive, image,name}) {

    return (
        <div className={isOpen ? "popup popup_opened" :"popup"} onClick={() => setActive(false)}>
            <div className="popup__conteiner-zoom">
                <button type="button" className="popup__close-button"></button>
                <img src={image} alt="" className="popup__image" ></img>
                <p className="popup__place-name">{name}</p>
            </div>
        </div>
    )
}