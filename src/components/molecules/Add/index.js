import React, {useState} from 'react'
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

import {Input} from '../../atoms/Input/index';
import {Button} from '../../atoms/Button/index';
import {palette} from "styled-theme";

const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
`;
const InputContainer = styled.div`
width:50%;
`;
const Plus = styled(FontAwesomeIcon)`
font-size:18px
color:${palette('success', 0)};
cursor:pointer;
`;

export const Add = ({action, length}) => {
    const [text, setText] = useState([]);
    const id = length + 1;
    return (
        <Wrapper>
            <InputContainer>
                <Input placeholder={`Add new task...`} onChange={(e) => setText(e.target.value)}/>
            </InputContainer>
            <Button text={<Plus icon={faPlus}/>} onClick={() => action({title: text, id})}/>
        </Wrapper>)
};