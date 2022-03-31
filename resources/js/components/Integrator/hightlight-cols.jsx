import React from 'react';
import HightlightColsText from "./hightlight-cols-text";
import img_1 from './src/img_1.webp';
import img_2 from './src/img_2.webp';
import img_3 from './src/img_3.webp';

const HightlightCols = () => {
    return (
        <div className={'container-fluid'}>
            {/*<div className={'row text-center text-white'}*/}
            {/*style={{textShadow: '0 0 2px black', fontSize: '1.2rem'}}*/}
            {/*>*/}
            {/*    <div className="col-md-4 bg-light p-5"*/}
            {/*         style={{*/}
            {/*             backgroundImage: `url(${img_1})`,*/}
            {/*             backgroundSize: 'cover',*/}
            {/*             backgroundPosition: 'center'*/}
            {/*         }}*/}
            {/*    >*/}
            {/*        Some news about audit*/}
            {/*    </div>*/}
            {/*    <div className="col-md-4 bg-light p-5"*/}
            {/*         style={{*/}
            {/*             backgroundImage: `url(${img_2})`,*/}
            {/*             backgroundSize: 'cover',*/}
            {/*             backgroundPosition: 'center'*/}
            {/*         }}*/}
            {/*    >*/}
            {/*        Top news from insider*/}
            {/*    </div>*/}
            {/*    <div className="col-md-4 bg-light p-5"*/}
            {/*         style={{*/}
            {/*             backgroundImage: `url(${img_3})`,*/}
            {/*             backgroundSize: 'cover',*/}
            {/*             backgroundPosition: 'center'*/}
            {/*         }}*/}
            {/*    >*/}
            {/*        Integration*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<HightlightColsText/>*/}
            <div className="row">
                <div className="col-md-4 px-0 d-flex">
                    <div className="card border-left border-right border-top-0 border-bottom-0">
                        <div className="card-body p-0">
                            <h5 className="card-title text-white d-flex align-items-center justify-content-center p-5 px-0"
                                style={{
                                    height: '173px',
                                    textShadow: '0 0 2px black',
                                    backgroundImage: `url(${img_1})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}>
                                Some news about
                                audit
                            </h5>
                            <p className="card-text pb-3 px-2">
                                Собственники помещений в многоквартирном доме вправе выбрать один из следующих способов
                                формирования фонда капитального ремонта: 1) перечисление взносов на капитальный ремонт
                                на специальный счет в целях формирования фонда капитального ремонта в виде денежных
                                средств, находящихся на специальном счете (далее — формирование фонда капитального
                                ремонта на специальном счете); 2) перечисление взносов на капитальный ремонт
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 px-0 d-flex">
                    <div className="card border-left border-right border-top-0 border-bottom-0">
                        <div className="card-body p-0">
                            <h5 className="card-title text-white d-flex align-items-center justify-content-center p-5 px-0"
                                style={{
                                    height: '173px',
                                    textShadow: '0 0 2px black',
                                    backgroundImage: `url(${img_2})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}>
                                Top news from insider
                            </h5>
                            <p className="card-text pb-3 px-2">
                                Жилищно-коммунальная сфера хозяйствования представляет собой многоотраслевой сложный
                                комплекс, обеспечивающий жизнедеятельность населения и функционирование
                                социально-производственной инфраструктуры. Сами организации жилищно-коммунального
                                сектора выполняют функции посредника между производителями жилищных и коммунальных услуг
                                и их потребителями по содержанию и эксплуатации зданий и сооружений и потреблению
                                коммунальных услуг. Эта сфера затрагивает интересы большей части населения городов и
                                поселков страны.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 px-0 d-flex">
                    <div className="card border-left border-right border-top-0 border-bottom-0">
                        <div className="card-body p-0">
                            <h5 className="card-title text-white d-flex align-items-center justify-content-center p-5 px-0"
                                style={{
                                    height: '173px',
                                    textShadow: '0 0 2px black',
                                    backgroundImage: `url(${img_3})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}>
                                Integration
                            </h5>
                            <p className="card-text pb-3 px-2">
                                Начало нового года ассоциируется для бухгалтеров с подготовкой годовой отчетности.
                                Важным моментом такой подготовки является подтверждение остатков по банковским счетам на
                                начало года. Раньше это было обязательным условием, прежде всего для банков. Ежегодно в
                                начале года обслуживающие подразделения банков в обязательном порядке выполняли
                                подписанные обеими сторонами письменные подтверждения остатков по счетам своих клиентов.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HightlightCols;
