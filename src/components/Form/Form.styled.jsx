import styled from "styled-components";

export const FormLabel = styled.form`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #008CBA;
    padding: 20px;
`

export const FormLabelInput = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`

export const FormInput = styled.input`
    font-size: 16px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    // width: 300px;
    margin-top: 5px;
`
export const FormParagraph = styled.p`
    margin-top: 20px;
    font-weight: bold;
`
export const FormBtn = styled.button`
    font-size: 18px;
    padding: 10px 20px;
    background-color: #008CBA;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`
