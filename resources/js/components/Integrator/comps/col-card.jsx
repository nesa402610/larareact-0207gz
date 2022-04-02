import React from 'react';
import img_1 from "../src/img_1.webp";

const ColCard = ({title, msg, img}) => {
    return (
        <div className="col-md-4 px-0 d-flex">
            <div className="card border-left border-right border-top-0 border-bottom-0">
                <div className="card-body p-0">
                    <h5 className="card-title text-white d-flex align-items-center justify-content-center p-5 px-0"
                        style={{
                            height: '173px',
                            textShadow: '0 0 2px black',
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        {title}
                    </h5>
                    <p className="card-text pb-3 px-2">
                        {msg}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ColCard;
