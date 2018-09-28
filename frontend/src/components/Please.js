import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';

class Please extends PureComponent{

    render(){
        return(
            <Div>
                <Title>Please Sign In</Title>
            </Div>
        );
    }

}

const Title = styled.h1`
font-family:Raleway, sans-serif;
margin: 0 auto;
align-self: center;
color: darkseagreen;

`;

const Div = styled.div`
display:flex;
height:400px; /* TODO: extends beyond parent with height 100% */
`;



export default Please;