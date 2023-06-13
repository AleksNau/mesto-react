import React from 'react';

const Main = () => {    
        return (
            <main className="main">
            <section className="profile">
                <div className="profile__info-conteiner">
                    <img src="#" alt="Жак Кусто" className="profile__avatar"></img>
                    <button className="profile__avatar-button">
                        <a href="#" className="profile__avatar-icon"></a>
                    </button>
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button type="button" className="profile__edit-button"></button>
                    <p className="profile__info">Исследователь океана</p>
                </div>
                <button type="button" className="profile__add-button"></button>
            </section>
            <ul className="elements">

            </ul>
        </main>
        )    
}

export default Main;