import React from 'react'
import styled from 'styled-components'
import { STYLE } from './constant'

const Btn = styled.button`
    background-color:${STYLE.primary};
    color:white;
    padding: 10px 20px;
    font-weight: bold;
    border:none;
    border-radius:${STYLE.borderRadius};
    cursor:pointer;
    &:hover {
        background-color:${STYLE.primaryDark};
    }
`
const Button = ({fullLength, children}) => {
    return (<Btn style={fullLength ? {width:'100%'} : null}>{children}</Btn>)
}

export default Button