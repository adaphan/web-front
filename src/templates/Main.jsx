import React from 'react';
import PropTypes from 'prop-types';
import feather from 'feather-icons';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Drawer from '../components/Drawer/Drawer';
import logoWa from '../assets/svg/logo-whatsapp.svg';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDialog: false
        };
    }

    componentDidMount() {
        feather.replace();
    }

    render() {
        const { children, withHeader } = this.props;
        return (
            <>
                {withHeader && (<Header />)}
                <Drawer />
                {children}
                <Footer />
                <div className="floating-whatsapp" role="button" tabIndex="0" onClick={() => { window.location = 'https://api.whatsapp.com/send?phone=6281222246812'; }}>
                    <img src={`/${logoWa}`} alt="WA Adaphan" />
                    <span className="info">
                        Need help?
                    </span>
                </div>
                <div className="vy-overlay hidden" />
            </>
        );
    }
}

Main.defaultProps = {
    withHeader: true
};

Main.propTypes = {
    withHeader: PropTypes.bool
};

export default Main;
