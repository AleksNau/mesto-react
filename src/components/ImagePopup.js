import CloseButton from "./CloseButton";

export default function ImagePopup({active, setActive, card}) {

    return (
        <div className={active ? "popup popup_opened" :"popup"} onClick={() => setActive(false)}>
            <div className="popup__conteiner-zoom">
                <button type="button" className="popup__close-button"></button>
                <img src={card} alt="" className="popup__image" ></img>
                <p className="popup__place-name">Место</p>
            </div>
        </div>
    )
}