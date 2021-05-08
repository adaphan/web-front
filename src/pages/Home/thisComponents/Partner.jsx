import React from 'react';
import indodax from '../../../assets/images/indodax.png';
import cxm from '../../../assets/images/cxm-direct.png';

const PartnerComponent = () => {
    return (
        <div className="partner-container">
            <div className="container">
                <h4 className="vy-text text-center">Our Partner</h4>
                <ul className="partner-list">
                    <li style={{ backgroundImage: `url(${indodax})` }} />
                    <li style={{ backgroundImage: `url(${cxm})` }} />
                    {/* <li style={{ backgroundImage: `url(${exness})` }} /> */}
                </ul>
            </div>
        </div>
    );
};

export default PartnerComponent;
