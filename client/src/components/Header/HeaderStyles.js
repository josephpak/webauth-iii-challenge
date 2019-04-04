import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: flex-end;
    border: 1px solid black;
    height: 50px;
    align-items: center;

    a {
        text-decoration: none;
        margin: 0 25px;
    }

    button {
        height: 25px;
        width: 100px;
        border-radius: 5px;
        background: white;
        border: 1px solid red;
        color: red;
        margin: 0 25px;
        cursor: pointer;
    }
`