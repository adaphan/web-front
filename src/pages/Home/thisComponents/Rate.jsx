import React from 'react';
import Slider from 'react-slick';

const RateComponent = () => {
    const mobileSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const webSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <div className="rate-container">
            <div className="container d-block d-md-none">
                <Slider {...mobileSettings}>
                    <div className="vy-card bordered">
                        <h5 className="vy-text text-center">Deposit Indodax</h5>
                        <p className="vy-text">Tidak dikenakan biaya</p>
                    </div>
                    <div className="vy-card bordered">
                        <h5 className="vy-text text-center">Deposit Indodax</h5>
                        <p className="vy-text">Tidak dikenakan biaya</p>
                    </div>
                    <div className="vy-card bordered">
                        <h5 className="vy-text text-center">Deposit Indodax</h5>
                        <p className="vy-text">Tidak dikenakan biaya</p>
                    </div>
                </Slider>
            </div>
            <div className="container d-none d-md-block">
                <Slider {...webSettings}>
                    <div className="vy-card bordered">
                        <h5 className="vy-text text-center">Deposit Indodax</h5>
                        <p className="vy-text">Tidak dikenakan biaya</p>
                    </div>
                    <div className="vy-card bordered">
                        <h5 className="vy-text text-center">Deposit Indodax</h5>
                        <p className="vy-text">Tidak dikenakan biaya</p>
                    </div>
                    <div className="vy-card bordered">
                        <h5 className="vy-text text-center">Deposit Indodax</h5>
                        <p className="vy-text">Tidak dikenakan biaya</p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default RateComponent;
