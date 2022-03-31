import React from 'react';
import img from './src/img.webp';


const TopBlock = () => {
    return (
        <div className={'container-fluid'}>
            <div className="row">
                <div className="col-lg-6 px-0">
                    <img className={'img-fluid w-100'}
                         src={img}
                         alt="Обобщающая картинка"/>
                </div>
                <div className="col-lg-6 p-3"
                     style={{backgroundColor: '#91d9ff'}}
                >
                    <div className="d-flex justify-content-between">
                        <a href="tel:++7(926)-522-9192"
                           className={'text-dark'}>
                            <i className="fa-solid fa-phone fa-2x pr-2"/><span style={{fontSize: '20px'}}>+7(926)-522-9192</span></a>
                        <a href="tel:++7(915)-121-04-44"
                           className={'text-dark'}>
                            <i className="fa-solid fa-phone fa-2x pr-2"/><span style={{fontSize: '20px'}}>+7(915)-121-04-44</span></a>
                    </div>
                    <div className="d-flex flex-column mt-5">
                        <div className={'text-center'}><h2 style={{fontSize: '48px'}}>ООО "Интегратор"</h2>
                            <span style={{fontSize: '26px'}}>Основные виде услуг:</span></div>
                        <div style={{
                            fontSize: '20px',
                            lineHeight: '23px',
                        }}>
                            <div className="p-4"
                                 style={{
                                     display: 'flex',
                                     flexDirection: 'column',
                                     gap: '1rem'
                                 }}>
                                <div>
                                    - проверки достоверности финансовой
                                    (бухгалтерской) отчетности по международным
                                    аудиторским стандартам
                                </div>
                                <div> - финансовый анализ деятельности организации
                                      с подготовкой письменной информации
                                      и рекомендаций
                                </div>

                                <div> - выполнение целевых проверок по программе заказчика
                                </div>
                                <div>- участие в восстановлении бухгалтерского учета</div>

                                <div>- консультационная помощь по вопросам аудита,
                                     бухгалтерского учета
                                </div>
                                <div>
                                    - подготовка экспертных заключений по
                                    финансово-хозяйственным вопросам по запросу судебных органов

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopBlock;
