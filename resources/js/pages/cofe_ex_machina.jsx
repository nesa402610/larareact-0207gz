import React, {useEffect} from 'react';

const CofeExMachina = () => {
    const coffes = [
        {name: 'Американо', price: 150},
        {name: 'Эспрессо', price: 250},
        {name: 'Латте', price: 200},
        {name: 'Чай', price: 70},
        {name: 'Вода', price: 30}
    ];
    return (
        <div className={'container-fluid p-2 bg-dark text-white'}>
            <h1>Кофе-машина</h1>
            <div className="row">
                <div className="col-3">
                    <div className="d-flex flex-column">
                        {coffes.map((item) =>
                            <div className={'d-flex justify-content-between border'}>
                                <div>
                                    {item.name}
                                </div>
                                <div>
                                    {item.price}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-4">

                </div>
                <div className="col-4">

                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    1000
                </div>
                <div className="col-1">
                    500
                </div>
                <div className="col-1">
                    100
                </div>
            </div>
        </div>
    );
};

export default CofeExMachina;
