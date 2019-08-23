import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
margin:0;
padding:0;
`;


export const List = ({items, renderItem}) =>
    <Ul>
        {items.map((item,index) => renderItem(item,index))}
    </Ul>;


