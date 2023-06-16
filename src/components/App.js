
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
