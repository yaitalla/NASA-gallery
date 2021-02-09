import styled, {keyframes} from 'styled-components';

export const Wrap = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: silver;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const ImgWrap = styled.div`
    border: 4px solid white;
    border-radius: 10px;
    margin: 16px;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
    overflow: hidden;
`;

export const BtnWrap = styled.div`
`;

export const Btn = styled.button`
    transition-duration: 0.4s;
    width: 100%;
    height: 80%;
    font-size: 1rem;
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
`;