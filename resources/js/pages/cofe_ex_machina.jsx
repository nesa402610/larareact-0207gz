import React from 'react';

const CofeExMachina = () => {
    // let login = prompt('Введите логин');
    // let password = prompt('Введите пароль');
    // if (login === 'admin' && password === 'admin') {
    //     console.log('Доступ админа разрешен');
    // } else if (login === 'user') {
    //     console.log('Доступ разрешен');
    // } else {
    //     console.log('Доступ запрещен');
    // }
    // let exit = prompt();
    let i = 0
    // while(exit !== "exit") {
    //     console.log("Hello!");
    //     exit = prompt("Введите слово exit для выхода из цикла");
    // }
    for (let i = 0; i < 5;) {
        console.log(i);
        i++
    }
    return (
        <div className={'container-fluid p-2'}>
            <h2>Тут будет чистый жс. На реакте. Да, треш</h2>
        </div>
    );
};

export default CofeExMachina;
