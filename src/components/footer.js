import react from 'react';
import styled from 'styled-components';

export default function Footer() {
    return (
        <Foter><Description>Made With 💗 By <a href="https://www.linkedin.com/in/anurag-panda-a37148190/">@Anu_Rag</a></Description></Foter>
    )
}

const Foter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #040714;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: -1;
`;

const Description = styled.p`
    color: white;
    font-size: 20px;
    margin: 2 0 10px;
    line-height: 1.5;
    letter-spacing: 1px;

    a{
        color: #0483ee;
        
        &:hover {
            cursor: pointer;
        }
    }
`;