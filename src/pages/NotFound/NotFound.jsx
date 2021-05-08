import React from 'react';
import Main from '../../templates/Main';

// style
import './NotFound.sass';

const NotFound = () => {
    return (
        <Main withHeader={false}>
            <div className="not-found-area">
                <div className="container">
                    <h1 className="vy-text">404</h1>
                    <h4>Page Not Found</h4>
                    <a href="/" className="vy-btn primary bordered">
                        <i data-feather="chevron-left" />
                        Back to Home
                    </a>
                </div>
            </div>
        </Main>
    );
};

export default NotFound;
