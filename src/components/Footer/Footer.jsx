import React from 'react';

// style
import './Footer.sass';

const Footer = () => {
    return (
        <footer className="vy-footer">
            <div className="container">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-12 col-md-4 mb-3">
                        <h5 className="vy-text">Adaphan Exchanger</h5>
                        <p className="vy-text">Jl. Raya Gandul Jl. Saabun No.10, Kel. Gandul, Kec. Cinere, Kota Depok, Jawa Barat 16512</p>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <h5 className="vy-text">Jam Operasional</h5>
                        <p className="vy-text">
                            Buka setiap hari (Senin - Juma&apos;at).
                            <br />
                            Jam 09:00 - 03:00
                        </p>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <h5 className="vy-text">Information</h5>
                        <p className="vy-text">
                            <a href="/faq" rel="follow">FAQ</a>
                        </p>
                        <p className="vy-text">
                            <a href="/terms" rel="follow">Term &amp; Condition</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <span>Copyright © 2020 - 2021 - PT Adaphan Penukaran Digital</span>
            </div>
        </footer>
    );
};

export default Footer;
