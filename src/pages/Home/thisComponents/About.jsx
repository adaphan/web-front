import React from 'react';
import btc from '../../../assets/images/btc-computing2.png';

const AboutComponent = () => {
    return (
        <div className="about-container" style={{ backgroundImage: `url(/${btc})` }}>
            <div className="container">
                <h5 className="vy-text">Adaphan Exchanger</h5>
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            Adaphan Exchanger (PT Adaphan Penukaran Digital) adalah salah satu perusahaan berbadan hukum yang telah menjadi partner resmi dari&nbsp;
                            <a href="https://indodax.com" className="text-dark text-decoration-underline" target="_blank" rel="noopener noreferrer">Indodax</a>
                            &nbsp;dan&nbsp;
                            <a href="https://cxmdirect.com" className="text-dark text-decoration-underline" target="_blank" rel="noopener noreferrer">CXM Direct</a>
                            &nbsp;untuk melakukan penambahan (Deposit) serta penarikan (Withdrawal).
                        </p>
                    </div>
                    <div className="col-md-6" />
                </div>
            </div>
        </div>
    );
};

export default AboutComponent;
