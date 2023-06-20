import React, {useEffect, useState} from 'react';
import '../index.css';
import Footer from './footer.js';
import Header from './header.js';
import Main from './main.js';
import api from "../utils/Api";

const App = () => {
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = React.useState({});
    //открытие универсального попапа
    const [isPopupOpen, setPopupOpen] = useState(false);

    React.useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getCards()])
      .then(([info, cards]) => {
        setCurrentUser(info);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);


    return (
        <div className="root">
            <div className="page">
                <Header />
                <Main cards={cards} profile={currentUser} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
