import styled from "styled-components";
export const AppContainer = styled.div`
  min-height: 100vh;
  text-align: right;
`

export const CounterWrapper = styled.div`
    font-weight:bold;
    display:flex;
    flex-direction:row;
    justify-content : center;
    margin :1em;
    align-items : center;

    & section {
        min-height : 10vw;
        min-width:10vw;
        margin : auto;
        display:flex;
        flex-direction: column;
        align-items: center !important;
        & p {
            font-size : 8em;
        }
    } 
    
`
export const FormHolder = styled.div `
    display :flex;
    flex-direction : row;
    justify-content : center;
    & Form{
        width:50%;
    }

`