import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotateZ(0);
    }
    100% {
        transform: rotateZ(60deg) translateX(-50%);
    }
`;

export const Container = styled.article`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Background = styled.div`
    position: fixed;
    background: #0D1117;
    z-index: -1;
    height: 400%;
    width: 300%;
    top: -30%;
    left: -30%;
    animation: ${rotate} 360s linear infinite; 
`;

export const Main = styled.main`
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const H1 = styled.h1`
    color: white;
    font-size: 2rem;
`;

export const SearchInput = styled.input`
    width: 50%;
    padding: 12px 20px;
    margin: 10px;
`;

export const SearchBtn = styled.button`
    transition-duration: 0.4s;
    width: 20%;
    padding: 0.5rem;
    margin: 20px;
    background-color: white;
    color: black;
    border: 2px solid #4caf54;
    cursor: pointer;
    &:hover {
        background-color: #4caf54;
        color: antiquewhite;
        cursor: pointer;
    }
    &:disabled {
        opacity: 40%;
    }
`;

export const Grid = styled.section`
    display: grid;
    justify-content: center;
    grid-template-columns: 300px 300px;
    flex-direction: column;
    flex-wrap: wrap;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    margin-top: 3rem;
    width: 100%;
    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
      }
`;

export const Footer = styled.footer`
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
    background: silver;
`;
