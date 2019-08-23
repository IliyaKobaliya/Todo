import React from 'react'
import styled from "styled-components";


import {Title} from '../../atoms/Title/index';
import {Search} from "../../molecules/Search";


const Wrapper = styled.div`
width:100%;
  display: flex;
  align-items:center;
  flex-direction:row;
  justify-content:space-around;
    color:white; 
    height:8vh;
`;


export const Header = (props) => {
    return (
        <Wrapper>
            <Title text={`Just do it...`}/>
            <Search {...props}/>
        </Wrapper>
    )
};