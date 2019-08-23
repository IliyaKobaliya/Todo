import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import {palette,fonts} from "styled-theme";

const StyledTitle = styled.h3`
  display: block;
  margin:0;
  color:${palette('grayscale', 1)};

 
`;

export const Title = ({text}) => <StyledTitle>{text}</StyledTitle>;

Title.propTypes = {
    text: PropTypes.string
};

Title.defaultProps = {
    text: 'text',
};

