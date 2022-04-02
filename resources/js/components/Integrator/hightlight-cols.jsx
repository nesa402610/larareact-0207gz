import React from 'react';
import HightlightColsText from "./hightlight-cols-text";
import img_1 from './src/img_1.webp';
import img_2 from './src/img_2.webp';
import img_3 from './src/img_3.webp';
import ColCard from "./comps/col-card";

const HightlightCols = () => {
    const msg = 'Собственники помещений в многоквартирном доме вправе выбрать один из следующих способов формирования фонда капитального ремонта: 1) перечисление взносов на капитальный ремонт на специальный счет в целях формирования фонда капитального ремонта в виде денежных средств, находящихся на специальном счете (далее — формирование фонда капитального ремонта на специальном счете); 2) перечисление взносов на капитальный ремонт';
    const msg2 = `Жилищно-коммунальная сфера хозяйствования представляет собой многоотраслевой сложный комплекс, обеспечивающий жизнедеятельность населения и функционирование социально-производственной инфраструктуры. Сами организации жилищно-коммунального сектора выполняют функции посредника между производителями жилищных и коммунальных услуг и их потребителями по содержанию и эксплуатации зданий и сооружений и потреблению коммунальных услуг. Эта сфера затрагивает интересы большей части населения городов и поселков страны.`;
    const msg3 = `Начало нового года ассоциируется для бухгалтеров с подготовкой годовой отчетности.
                                Важным моментом такой подготовки является подтверждение остатков по банковским счетам на
                                начало года. Раньше это было обязательным условием, прежде всего для банков. Ежегодно в
                                начале года обслуживающие подразделения банков в обязательном порядке выполняли
                                подписанные обеими сторонами письменные подтверждения остатков по счетам своих клиентов.`;

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
                <ColCard title={'Some news about audit'}
                         msg={msg}
                         img={img_1}/>
                <ColCard title={'Top news from insider'}
                         msg={msg2}
                         img={img_2}/>
                <ColCard title={'Integration'}
                         msg={msg3}
                         img={img_3}/>
            </div>
        </div>
    );
};

export default HightlightCols;
