import React, {useState} from 'react';

const CofeExMachina = () => {
    const [balance, setBalance] = useState(0);

    const coffes = [
        {name: 'Американо', price: 150},
        {name: 'Эспрессо', price: 250},
        {name: 'Латте', price: 200},
        {name: 'Чай', price: 70},
        {name: 'Вода', price: 30}
    ];
    let initialX = 0;
    let initialY = 0;
    let active = false;
    let xOffset = 0;
    let yOffset = 0;
    let currentX;
    let currentY;
    const MoveDown = (e) => {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if (e.target) {
            active = true;
        }
    };
    const MoveUp = (event) => {
        initialX = currentX;
        initialY = currentY;
        active = false;
    };
    const setTranslate = (xPos, yPos, el) => {
        el.style.transform = "translate(" + xPos + "px, " + yPos + "px)";
    };

    const Move = (e) => {
        if (active) {
            e.preventDefault();
            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }
            xOffset = currentX;
            yOffset = currentY;
            setTranslate(currentX, currentY, e.target);
        }
    };

    const insertMoney = (e) => {
        setBalance(balance + e.target.getAttribute('data-value'));
        console.log(balance);

    };

    const dragOver = (e) => {
        e.preventDefault();
    };
    // const nums = [-1, -5555, -2, -5, -23, -43, -134, -43, -232, -56];
    // nums.length = 3
    // console.log(nums);
    // let big = -Infinity;
    //
    // nums.map(num => {
    //     if (big < num && num % 2 === 0) big = num;
    // });
    // console.log(big);


    return (
        <div className={'container-fluid p-2 bg-dark text-white'}>
            <h1 className={'text-center'}>Кофе-машина</h1>
            <div className="row mx-0">
                <div className="col-3">
                    <h3 className={'text-center'}>Выбор напитка</h3>
                    <div className="d-flex flex-column p-4 bg-secondary text-dark">
                        {coffes.map((item) =>
                            <div className={'d-flex justify-content-between bg-light px-2 my-2'} key={item.name}>
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
                <div className="col-4 d-flex flex-column">
                    <h3 className={'text-center'}>Прием купюр</h3>
                    <div className={'bg-secondary flex-grow-1 '}
                         onDrop={event => insertMoney(event)}
                         onDragOver={event => dragOver(event)}
                    >
                        d
                    </div>
                </div>
                <div className="col-4 d-flex flex-column">
                    <h3>asd</h3>
                    <div className={'flex-grow-1 bg-secondary'}>

                    </div>
                </div>
            </div>
            <div className="row mx-0">
                <div className="col-1">
                    <div className={'bg-warning p-2 d-flex justify-content-center align-items-center'}
                         onMouseDown={event => MoveDown(event)}
                         onMouseUp={event => MoveUp(event)}
                         onMouseMove={event => Move(event)}
                         data-value={1000}
                         draggable={true}
                    >
                        1000
                    </div>
                </div>
                <div className="col-1"
                     draggable={true}
                     onDragStart={e => drager(e)}
                     data-value={500}
                >
                    500
                </div>
                <div className="col-1" data-value={100}>
                    100
                </div>
            </div>
        </div>
    );
};

export default CofeExMachina;
