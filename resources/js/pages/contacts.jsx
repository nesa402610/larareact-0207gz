import React from 'react';

const Contacts = () => {
    return (
        <div>
            <h1>Контакты</h1>
            <form>
                <div>Ваш e-mail:<input type="email"/></div>
                <div>Ваше имя:<input type="text"/></div>
                <div><input type="checkbox"/></div>
                <div>
                    <textarea name="message" cols="30" rows="10" placeholder="Ваше сообщение..."/>
                </div>
                <div>
                    <input type="submit"/>
                    </div>
            </form>
            <div>
                <img src="images/149071.png" alt="Первая картинка"/>
                <img src="images/149071.png" alt="Вторая картинка"/>
            </div>
            <table rules="all">
                <tr>
                    <th style={{background: 'orange'}}>#</th>
                    <th style={{background: 'blue'}}>Содержание</th>
                    <th style={{background: 'yellow'}}>Количество</th>
                </tr>
                <tr style={{background: 'greenyellow'}}>
                    <th/>
                    <th/>
                    <th/>
                </tr>
                <tr style={{background: 'blue'}}>
                    <th/>
                    <th/>
                    <th/>
                </tr>
                <tr>
                    <th style={{background: 'orange'}} colSpan="2">Итого</th>
                    <th style={{background: 'blue'}}>15</th>
                </tr>
            </table>
        </div>
);
};

export default Contacts;
