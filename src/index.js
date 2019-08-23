import 'react-hot-loader/patch'
import React from 'react'
import {render} from 'react-dom'
import {Provider, ReactReduxContext} from "react-redux"
import {ConnectedRouter} from 'connected-react-router'
import configureStore, {history} from './configStore'
import {basename} from './config'
import App from './components/App'

const store = configureStore();

const renderApp = () => (
    <Provider store={store} context={ReactReduxContext}>
        <ConnectedRouter history={history} basename={basename} context={ReactReduxContext}>
            <App/>
        </ConnectedRouter>
    </Provider>
);

const root = document.getElementById('root');
render(renderApp(), root);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        require('./components/App');
        render(renderApp(), root)
    })
}
