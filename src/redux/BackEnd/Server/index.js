import {todo} from '../DataBase/index'

export const server = (url, req) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
                if (url === `todo`) {
                    if (req === `getTodoList`) {
                        resolve(todo)
                    }
                    else if (req === `SearchTodoItem`) {
                        resolve(todo)
                    }
                } else reject(`bad`)

            }, 2000
        )
    })
};

