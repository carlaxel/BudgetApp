import React from 'react';
import styled from 'styled-components';

class Controls extends React.PureComponent{

    render(){
        return(
            <Div onClick={this.props.handleOnClick}>
                <svg version="1.1" id="Capa_1" x="0px" y="0px"
                    viewBox="0 0 54 54" >
                <g>
                    <path style={{fill:"#C7CAC7"}} d="M6,0C5.448,0,5,0.447,5,1v40c0,0.553,0.448,1,1,1s1-0.447,1-1V1C7,0.447,6.552,0,6,0z"/>
                    <path style={{fill:"#C7CAC7"}} d="M48,12c-0.552,0-1,0.447-1,1v40c0,0.553,0.448,1,1,1s1-0.447,1-1V13C49,12.447,48.552,12,48,12z"/>
                    <path style={{fill:"#C7CAC7"}} d="M27,0c-0.552,0-1,0.447-1,1v19c0,0.553,0.448,1,1,1s1-0.447,1-1V1C28,0.447,27.552,0,27,0z"/>
                    <path style={{fill:"#C7CAC7"}} d="M27,32c-0.552,0-1,0.447-1,1v20c0,0.553,0.448,1,1,1s1-0.447,1-1V33C28,32.447,27.552,32,27,32z"/>
                </g>
                <circle style={{fill:"#7383BF"}} cx="6" cy="47" r="6"/>
                <circle style={{fill:"#26B99A"}} cx="26.793" cy="26.793" r="6.207"/>
                <circle style={{fill:"#7383BF"}} cx="48" cy="7" r="6"/>

                </svg>
            </Div>
        );
    }
}

export default Controls;

const Div = styled.div`
    height: 40px;
    width: 40px;
    margin: 18px 18px 0 0;
    
`;