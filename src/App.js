import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import routes from './routes';

class App extends React.Component {
    componentDidMount() {
        // console.log('Apa');
    }

    render() {
        return (
            <Switch>
                {routes.map((i, idx) => (
                    // eslint-disable-next-line arrow-body-style
                    // eslint-disable-next-line react/no-array-index-key
                    <Route key={idx} path={i.path} component={i.component} exact={i.exact} />
                ))}
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default App;
