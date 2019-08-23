import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";

import {PageTemplate} from '../../templates/PageTemplate';

import {Header} from '../../organism/Header';
import {Footer} from '../../organism/Footer';
import {TodoList} from '../../organism/TodoList'

import {getTodo} from "../../../redux/Actions/Todo";


export const Todo = () => {
    const list = useSelector((state) => state.Todo);
    const loading = useSelector((state) => state.TodoLoading);
    const [todoList, setTodoList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (Array.isArray(list) && list.length === 0) dispatch(getTodo(`todo`, `getTodoList`))
    }, [list, dispatch]);

    useEffect(() => {
        setTodoList(list);
    }, [list]);

    const searchTodo = (text) => {
        if (text.length) {
            let searchArr = todoList.filter((item) => item.title.includes(text.toLowerCase()));
            setTodoList([...searchArr])
        } else (
            setTodoList(list)
        )
    };
    const addTodo = (todo) => {
        (todo.title.length === 0) ? alert(`Что бы написать новую задачу,наишите ее.`) :
            setTodoList([...todoList, todo])
    };
    const moveUp = (index) => {
        if (index !== 0) {
            setTodoList(state => {
                const newState = [...state];
                [newState[index], newState[index - 1]] = [newState[index - 1], newState[index]];
                return [...newState];
            });
        }
    };
    const moveDown = (index) => {
        if (index !== todoList.length - 1) {
            setTodoList(state => {
                const newState = [...state];
                [newState[index], newState[index + 1]] = [newState[index + 1], newState[index]];
                return [...newState]
            });
        }
    };
    const deleteTodo = (index) => {
        setTodoList(state => {
            const newState = [...state];
            newState.splice(index, 1);
            return [...newState]
        });
    };


    return (
        <PageTemplate
            header={<Header search={searchTodo}/>}
            footer={<Footer/>}
        >
            {loading ? <div style={{color: `#000`}}>loading</div> :
                <TodoList
                    add={addTodo}
                    moveUp={moveUp}
                    moveDown={moveDown}
                    deleteTodo={deleteTodo}
                    list={todoList}/>}
        </PageTemplate>
    )
};
