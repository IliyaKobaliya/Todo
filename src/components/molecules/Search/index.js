import React, {useState} from 'react'
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

import {Input} from '../../atoms/Input/index';
import {Button} from "../../atoms/Button";


const Wrapper = styled.div`
width:25%;
  display: flex;
  align-items:center;
  flex-direction:row;
    height:80%;
`;
const SearchIcon = styled(FontAwesomeIcon)`
font-size:20px;
color:#c3c3c3;
cursor:pointer;
`;

const InputContainer = styled.div`
width:90%;
`;
const ButtonContainer = styled.div`
width:10%;
`;
export const Search = ({search}) => {
    const [text, setText] = useState([]);
    return (
        <Wrapper>
            <InputContainer>
                <Input type={`text`} placeholder={`Search`} onChange={(event) => setText(event.target.value)}/>
            </InputContainer>
            <ButtonContainer>
                <Button text={<SearchIcon icon={faSearch}/>} onClick={() => search(text)}/>
            </ButtonContainer>
        </Wrapper>)
};