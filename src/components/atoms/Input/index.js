import React from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";
import {palette} from "styled-theme";


const StyledInput = styled.input`
width:100%;
  font-family:sans-serif;;
  display:block;
  box-sizing:border-box;
  padding:5px;
  border:0;
  outline:0;
    padding-left:15px;
border-bottom:1px solid ${palette('grayscale', 3)};
`;

export const Input = ({...props}) => <StyledInput {...props}/>;

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
};


