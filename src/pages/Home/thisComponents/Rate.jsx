import React from 'react';

const RateComponent = () => {
    return (
        <div className="rate-container">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-4">
                        <div className="vy-card bordered">
                            <h5 className="vy-text text-center">Deposit Indodax</h5>
                            <p className="vy-text">Tidak dikenakan biaya</p>
                            <p className="vy-text">Tidak dikenakan biaya</p>
                            <p className="vy-text">Tidak dikenakan biaya</p>
                            <p className="vy-text">Tidak dikenakan biaya</p>
                            <p className="vy-text">Tidak dikenakan biaya</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="vy-card bordered">
                            <h5 className="vy-text text-center">Withdrawal Indodax</h5>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="vy-card bordered">
                            <h5 className="vy-text text-center">Deposit CXM Direct</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RateComponent;
