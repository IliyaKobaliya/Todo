import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {palette, fonts} from 'styled-theme'

const Wrapper = styled.li`
width:100%;
height:50px;
 list-style-type: none;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
border-bottom:1px solid ${palette('grayscale', 5)};
box-sizing:border-box;
`;
const Content = styled.div`
width:80%;
height:100%;
padding-left:20px;
color:${palette('grayscale', 0)};
display:flex;
align-items:center;
justify-content:flex-start;
`;
const Title = styled.div`
&:first-letter{
text-transform: capitalize
}
`;

const Action = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:10%;
height:100%;
 margin:0;
`;
const ArrowUp = styled(FontAwesomeIcon)`
color:${palette('success', 0)};
cursor:pointer;
 box-sizing:border-box;
`;
const ArrowDown = styled(FontAwesomeIcon)`
color:${palette('danger', 0)};
cursor:pointer;
`;
const Trash = styled(FontAwesomeIcon)`
color:${palette('grayscale', 0)};
cursor:pointer;
`;

export const TodoItem = ({item, index, ...props}) => {
    const {moveUp, moveDown, deleteTodo} = props;
    return (
        <Wrapper>
            <Content>
                <Title>{item.title}</Title>
            </Content>
            {(moveUp && moveDown && deleteTodo) &&
            <Action>
                <ArrowUp onClick={() => moveUp(index)} icon={faArrowUp}/>
                <ArrowDown onClick={() => moveDown(index)} icon={faArrowDown}/>
                <Trash onClick={() => deleteTodo(index)} icon={faTrashAlt}/>
            </Action>
            }
        </Wrapper>)
};