import {createBrowserHistory} from 'history'
import {applyMiddleware, compose, createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import createRootReducer from '../redux/Reducers/rootReducer'
import thunk from "redux-thunk";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            ),
        ),
    );
    if (module.hot) {
        module.hot.accept('../redux/Reducers/rootReducer', () => {
            store.replaceReducer(createRootReducer(history));
        });
    }

    return store
}