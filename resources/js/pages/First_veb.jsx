import React from 'react';

const FirstVeb = () => {

    function power(base, exponent) {
        let result = 1;
        for(let i=1; i < exponent; i++) {
            result *= base; // result*base
        }
        return result;
    }
    console.log(power(2,10));
    return (
        <div className={'col-8'}>
            <div>
                <h1>Асаламалексум</h1>
                <img src="./images/149071.png"
                     alt="Картинка стока"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum esse nihil obcaecati porro! Alias
                   animi
                   consequatur dolorem enim eum ex hic nam nobis nostrum provident quasi reiciendis rem, sed sint!</p>
            </div>
            <div>
                <p>Список покупов:</p>
                <ul>
                    <li>Чай</li>
                    <li>Ковер</li>
                    <li>Манка</li>
                </ul>
                <p>Транспортные средства:</p>
                <ol>
                    <li>Автомобиль</li>
                    <li>Самокат</li>
                    <li>Корабль</li>
                </ol>
            </div>
        </div>
    );
};

export default FirstVeb;
