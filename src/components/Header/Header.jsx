import React from 'react';
import { Link } from 'react-router-dom';

// style
import './Header.sass';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleDrawer = this.handleDrawer.bind(this);
        this.scrollToAbout = this.scrollToAbout.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    // eslint-disable-next-line class-methods-use-this
    handleScroll() {
        const { scrollY } = window;
        const hero = document.querySelector('.hero-container');
        const heroHeight = hero.offsetHeight;
        const header = document.querySelector('.vy-header');
        if (scrollY > heroHeight) {
            header.classList.add('fixed-scroll');
        } else if (scrollY < heroHeight) {
            header.classList.remove('fixed-scroll');
        }
    }

    // eslint-disable-next-line class-methods-use-this
    handleDrawer(e) {
        e.preventDefault();
        const { body } = document;
        const drawer = document.querySelector('.vy-drawer');
        const overlay = document.querySelector('.vy-overlay');
        drawer.classList.toggle('visible');
        overlay.classList.replace('hidden', 'visible');
        body.classList.toggle('no-scroll');
    }

    // eslint-disable-next-line class-methods-use-this
    scrollToAbout() {
        const container = document.querySelector('.about-container');
        container.scrollIntoView();
    }

    render() {
        return (
            <header className="vy-header">
                <div className="vy-header-container">
                    <div className="vy-header-left">
                        {/* <div className="vy-hamburger" role="button" tabIndex={0} onClick={this.handleDrawer}>
                            <div />
                            <div />
                            <div />
                        </div> */}
                        <a href="/" className="d-none d-md-inline-block text-white">ADAPHAN EXCHANGER</a>
                    </div>
                    <a href="/" className="d-inline-block d-md-none text-white">ADAPHAN EXCHANGER</a>
                    <div className="vy-header-right">
                        <ul className="vy-nav-menu horizontal">
                            <li className="vy-nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="vy-nav-item">
                                <span role="button" tabIndex="0" onClick={this.scrollToAbout}>Abouts</span>
                            </li>
                            <li className="vy-nav-item vy-dropdown">
                                <span>
                                    Contact
                                    <i data-feather="chevron-down" />
                                </span>
                                <ul className="vy-dropdown-menu">
                                    <li className="vy-dropdown-item">
                                        <a href="https://api.whatsapp.com/send?phone=6281222246812" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                                    </li>
                                    <li className="vy-dropdown-item">
                                        <a href="https://www.facebook.com/adaphanexchanger" target="_blank" rel="noopener noreferrer">Facebook</a>
                                    </li>
                                    <li className="vy-dropdown-item">
                                        <a href="https://www.instagram.com/adaphan" target="_blank" rel="noopener noreferrer">Instagram</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
