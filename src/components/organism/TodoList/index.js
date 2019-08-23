import React from 'react';
import styled from 'styled-components';

import {List} from '../../atoms/List';
import {TodoItem} from '../../atoms/TodoItem';
import {Add} from '../../molecules/Add';
import {palette, fonts} from 'styled-theme'

const Wrapper = styled.div`
width:70%;
height:70vh;
margin:0 auto;
`;
const ListContainer = styled.div`
width:100%;
height:90%;
box-sizing:border-box;  
overflow-Y:scroll;
border:1px solid #c3c3c3;
`;

const ActionContainer = styled.div`
width:100%;
height:10%;
color:black;
box-sizing:border-box;  
`;

let Counter = () => {
    let count = 0;

    let inc = (num) => count += num;
    let dec = (num) => count -= num;
    let getCount = () => console.log(count);
    return {inc, dec, getCount}
};

let module1 = Counter(),
    module2 = Counter();

module1.inc(13);
module1.dec(4);
module1.getCount();
module2.getCount();


export const TodoList = ({list, add, ...props}) => {
    return (
        <Wrapper>
            <ActionContainer>
                <Add action={add} length={list.length}/>
            </ActionContainer>
            <ListContainer>
                {(!list.length)
                    ?
                    <TodoItem item={{
                        title: `Add new todo`
                    }}/>
                    :
                    <List items={list} renderItem={(item, index) =>
                        <TodoItem
                            key={item.id}
                            {...props}
                            index={index}
                            item={item}/>}/>
                }
            </ListContainer>
        </Wrapper>
    )
};