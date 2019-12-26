import React, { Component } from 'react'
import {Header, Body, Title,Left,Right } from 'native-base';
import SignupForm from './SignupForm';


export default class Signup extends Component {
    render() {
        return (
            <React.Fragment>
                <Header>
                    <Left/>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <SignupForm/>
            </React.Fragment>
            
        )
    }
}
