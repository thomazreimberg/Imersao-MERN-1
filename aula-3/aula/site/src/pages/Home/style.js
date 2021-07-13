import styled from "styled-components"

const Container = styled.div`
    min-height: 100vh
    background-image: url('/assets/images/home-background.png');

`

const Title = styled.div`
    color: #F0A124;
    width: 286px;
    
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 64px;
    text-align: center;

    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
`

export { Title, Container }