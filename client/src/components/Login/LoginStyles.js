import styled from "styled-components"

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 300px;
    height: 400px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: -2px 6px 7px -5px rgba(0,0,0,0.75);

    h1 {
        margin-bottom: 20px;
        font-size: 1.3rem;
    }

    input {
        border-radius: 5px;
        margin: 5px 0;
        padding: 7px 5px;
    }

    button {
        height: 25px;
        width: 100px;
        border-radius: 5px;
        background: white;
        border: 1px solid blue;
        color: blue;
        cursor: pointer;
        margin-top: 50px;
    }
`