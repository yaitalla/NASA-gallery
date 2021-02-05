import styled, {keyframes} from 'styled-components';

export const Container = styled.article`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 10px solid yellow;
`;

export const Main = styled.main`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Background = styled.div`
    position: absolute;
    background: black;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

export const H1 = styled.h1`

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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    grid-column-gap: 10px;
    max-width: 800px;
    margin-top: 3rem;
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
`;