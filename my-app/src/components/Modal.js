import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';


export default class extends Component {
    render() {
        return (
            <ProductConsumer>
            {(value) => {
              return   
            }}
            </ProductConsumer>
        )
    }
}
