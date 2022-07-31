import React from "react";
import styled from 'styled-components';


function Hello(){
    const StyleButton = styled.button`
        color: red;
        background-color: gray;
    `;
    return <StyleButton> 나만의 버튼</StyleButton>;
}

export default Hello;
