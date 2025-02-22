import styled from "styled-components";

export const Button = styled.button`
    min-width: 220px;
    min-height: 34px;
    border-radius: 5px;
    padding: 10px 18px;
    font-size: 16px;
    background-color: black;
    color: white;
    transition: 0.3;
    cursor: pointer;
   
   &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.4s ease-in;
}
`;

export const OutlinedButton =styled(Button)`
background-color: white;
color: black;
&:hover{
    background-color: black;
    color: white;
}
`;