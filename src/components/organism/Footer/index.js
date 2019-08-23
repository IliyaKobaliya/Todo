import React from 'react'
import styled from 'styled-components';
import {palette} from "styled-theme";


const Wrapper = styled.div`
 height:6vh;
 display:inline-block;
 width:20%;
 padding-left:80%;
`;
const Text = styled.span`
 color:${palette('grayscale', 1)};
`;
const Link = styled.span`
  color:${palette('danger', 0)};
`;
export const Footer = () =>
    <Wrapper>
        <Text>Made with love by </Text>
        <Link>@Iliya</Link>
    </Wrapper>;