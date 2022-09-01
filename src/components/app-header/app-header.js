import React from "react";

import '../app-header/app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;  
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 100px;
    h1 {
        font-size: 26px;
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = () => {
    return(
        <Header>
            <h1>Harry.egarra</h1>
            <h2>5 записей, из них понравилось</h2>
        </Header>
    )
}

export default AppHeader;