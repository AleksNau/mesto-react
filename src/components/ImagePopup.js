import CloseButton from "./CloseButton";

export default function ImagePopup({active, setActive}) {

    return (
        <div className="popup popup_image-zoom">
            <div className="popup__conteiner-zoom">
                <button type="button" className="popup__close-button"></button>
                <img src="#" alt="" className="popup__image"></img>
                <p className="popup__place-name">Место</p>
            </div>
        </div>
    )
}