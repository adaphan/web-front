import React from 'react';
// import { Link, Events, scrollSpy } from 'react-scroll';
import Particles from 'react-particles-js';
import logo from '../../../assets/images/adaphan-logo.png';

class HeroComponent extends React.Component {
    constructor(props) {
        super(props);
        this.scrollToAbout = this.scrollToAbout.bind(this);
    }

    // componentDidMount() {
    //     Events.scrollEvent.register('begin');
    //     Events.scrollEvent.register('end');
    //     scrollSpy.update();
    // }

    // componentWillUnmount() {
    //     Events.scrollEvent.remove('begin');
    //     Events.scrollEvent.remove('end');
    // }

    // eslint-disable-next-line class-methods-use-this
    scrollToAbout() {
        const container = document.querySelector('.about-container');
        container.scrollIntoView();
    }

    render() {
        return (
            <>
                <div className="hero-container">
                    <Particles
                        id="particles-js"
                        params={{
                            particles: {
                                number: {
                                    value: 70
                                },
                                color: {
                                    value: '#fff'
                                },
                                opacity: {
                                    value: 0.4,
                                    anim: {
                                        enable: true
                                    }
                                },
                                size: {
                                    value: 1,
                                    random: true
                                },
                                move: {
                                    speed: 0.5
                                }
                            }
                        }}
                    />
                    <div className="adaphan-logo">
                        <img src={`/${logo}`} alt="Adaphan Exchanger" />
                    </div>
                    <h3 className="vy-text mb-3">Adaphan Exchanger</h3>
                    <p className="vy-text">Partner resmi Jual - Beli voucher INDODAX.</p>
                    <button type="button" className="vy-btn bordered" onClick={this.scrollToAbout}>
                        <i data-feather="chevron-down" />
                        Read More
                    </button>
                    <button type="button" className="vy-btn bordered" onClick={() => { window.location = 'https://api.whatsapp.com/send?phone=6281222246812'; }}>
                        <i data-feather="phone" />
                        Contact US
                    </button>
                </div>
            </>
        );
    }
}

export default HeroComponent;
