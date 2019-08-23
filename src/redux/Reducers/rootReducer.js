import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
import {Todo, TodoError, TodoLoading} from './Todo'

const rootReducer = (history) => combineReducers({
    Todo, TodoError, TodoLoading,
    router: connectRouter(history),
});

export default rootReducer;
