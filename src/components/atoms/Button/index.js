import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.div`
display:flex;
align-items:center;
justify-content:center;
`;
export const Button = ({...props}) =>
    <StyledButton {...props}>
        {props.text}
    </StyledButton>;