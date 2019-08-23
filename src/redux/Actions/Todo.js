import {server} from '../BackEnd/Server'

export function TodoError(bool) {
    console.log(`ошибка загрузки задач`);
    return {
        type: 'TODO_ERRORED',
        hasErrored: bool
    };
}

export function TodoLoading(bool) {
    console.log(`загрузка задач ${bool ? `началась` : `закончилась`}`);
    return {
        type: 'TODO_LOADING',
        isLoading: bool
    };
}


export function Todo(todo) {
    console.log(`[ ${todo.length} ] задач загружено`);
    return {
        type: 'TODO_SUCCESS',
        todo
    };
}


export function getTodo(url, req) {
    return (dispatch) => {
        dispatch(TodoLoading(true));
        server(url, req)
            .then((response) => {
                if (response === false) {
                    throw Error(`Ошибка запроса!`);
                }
                return response
            })
            .then(todo => dispatch(Todo(todo)))
            .then(() => dispatch(TodoLoading(false)))
            .catch(() => dispatch(TodoError(true)));
    };
}
