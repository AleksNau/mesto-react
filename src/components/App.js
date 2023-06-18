import React, {useEffect, useState} from 'react';
import '../index.css';
import Footer from './footer.js';
import Header from './header.js';
import Main from './main.js';
import api from "../utils/Api";
import AddForm from "./AddForm";

const App = () => {
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = React.useState({});
    React.useEffect(() => {
        api.getCards().then(data => setCards(data.map(card => ({
                _id: card._id,
                link: card.link,
                likes: card.likes,
                owner: card.owner,
                name:card.name
            }
        ))))
    }, [cards])

    React.useEffect(() => {
        api.getProfileInfo().then(info => {
            setCurrentUser(info)
            console.log(info)
        }
        )
            },[])


    return (
        <div className="root">
            <div className="page">
                <Header />
                <Main cards={cards} profile={currentUser}/>
                <Footer/>
            </div>

        </div>

    );
}

export default App;
