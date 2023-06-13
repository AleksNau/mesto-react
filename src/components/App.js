
import '../index.css';
import Footer from './footer.js';
import Header from './header.js';
import Main from './main.js';

const App = () => {
  return (
  <div className="root">
    <div className="page">
        <Header/>
        <Main/>
        <Footer/>
        <div className="popup popup_profile">
            <div className="popup__conteiner">
                <form name="profile-form" className="popup__form popup__form_profile" method="post" noValidate>
                    <button type="button" className="popup__close-button"></button>
                    <fieldset className="popup__fieldset">
                        <legend className="popup__title">Редактировать профиль</legend>
                        <label>
                            <input name="Name" id="name" type="text" className="popup__input popup__input_type_name"
                                minLength ="2" maxLength="40" required></input>
                            <span id="name-error" className="popup__error">&nbsp;</span>
                        </label>
                        <label>
                            <input name="Info" id="info" type="text" className="popup__input popup__input_type_info"
                                minLength ="2" maxLength="200" required></input>
                            <span id="info-error" className="popup__error">&nbsp;</span>
                        </label>
                        <button type="submit" className="popup__submit">Сохранить</button>
                    </fieldset>
                </form>
            </div>
        </div>
        <div className="popup popup_add">
            <div className="popup__conteiner">
                <form name="create_card-form" className="popup__form popup__form_add" id="create_card-form" method="post"
                    noValidate>
                    <button type="button" className="popup__close-button"></button>
                    <fieldset className="popup__fieldset">
                        <legend className="popup__title">Новое место</legend>
                        <label>
                            <input name="name" id="place" type="text" className="popup__input popup__input_type_place"
                                placeholder="Название" minLength ="2" maxLength="30" required></input>
                            <span id="place-error" className="popup__error"></span>
                        </label>
                        <label>
                            <input name="link" id="image-link" type="url"
                                className="popup__input popup__input_type_image-link" placeholder="Ссылка на картинку"
                                required></input>
                            <span id="image-link-error" className="popup__error"></span>
                        </label>
                        <button type="submit" className="popup__submit" form="create_card-form"
                            value="Сохранить изменения">Создать</button>
                    </fieldset>
                </form>
            </div>
        </div>
        <div className="popup popup_image-zoom">
            <div className="popup__conteiner-zoom">
                <button type="button" className="popup__close-button"></button>
                <img src="#" alt="" className="popup__image"></img>
                <p className="popup__place-name">Место</p>
            </div>
        </div>
        <div className="popup popup_remove">
            <div className="popup__conteiner">
                <form name="remove-form" className="popup__form popup__form_remove" id="remove-form" method="post"
                    noValidate>
                    <button type="button" className="popup__close-button"></button>
                    <fieldset className="popup__fieldset">
                        <legend className="popup__title popup__title_remove">Вы уверены?</legend>
                        <button type="submit" className="popup__submit" form="remove-form"
                            value="Удалить картинку">Да</button>
                    </fieldset>
                </form>
            </div>
        </div>
        <div className="popup popup_avatar">
            <div className="popup__conteiner">
                <form name="create_card-form" className="popup__form popup__form_avatar" id="avatar-form" method="post"
                    noValidate>
                    <button type="button" className="popup__close-button"></button>
                    <fieldset className="popup__fieldset">
                        <legend className="popup__title">Обновить аватар</legend>
                        <label>
                            <input name="link" id="avatar-link" type="url"
                                className="popup__input popup__input_type_image-link" placeholder="Ссылка на аватар"
                                required></input>
                            <span id="avatar-link-error" className="popup__error"></span>
                        </label>
                        <button type="submit" className="popup__submit" form="avatar-form"
                            value="Обновить аватар">Сохранение...</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
    <template className="template-item">
        <li className="elements__item">
            <img src="#" alt="Элемент" className="elements__image"></img>
            <div className="elements__info">
                <p className="elements__text"></p>
                <div className="elements__like-container">
                    <button type="button" className="elements__like"></button>
                    <p className="elements__like-counter">2</p>
                </div>
                <button type="button" className="elements__delete"></button>
            </div>
        </li>
    </template>
</div>

  );
}

export default App;
