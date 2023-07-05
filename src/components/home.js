import React from 'react';
import styled, { keyframes } from 'styled-components';
//import backgroundImg from '../public/image/img-pro-2.png';
import TextAnimation from './animation/Animation'
//    background-image: url("/image/metaverse101.jpeg");
import Footer from './footer';
//import image from ''
import { mobile } from '../Responsive';


//           <Link to="/Marketplace/Entry">
//          </Link>


export default function Home() {
    return (

        <Container>
            <Content>
                <CTA>

                    <Description>Happy Birthday <TextAnimation /> </Description><Symbol>🖤</Symbol>

                </CTA>
                <BgImage />

            </Content>
            <Footer />
        </Container>
    )
};







const Container = styled.section`
    
    flex-direction: column;
    overflow: hidden;
    display: flex;
    text-align: center;
    height: 100vh;
    position: relative;
`;
const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("Images/Photo.jpeg");
    top: 100;
    right: 0;
    left: 0; 
    position: absolute;
    z-index: -100;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 10px;
    height: 100%;
`;
const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`;

const Symbol = styled.div`
    font-size: 40px;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;

`;

const Description = styled.p`
    color: white;
    background: linear-gradient(90deg, rgba(235,245,243,100), rgba(0,212,255,1) 100%);
  //180deg, #730040 0%, #301CBE 100%
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    
    font-size: 2rem;
    
    margin: 20rem 0 15px;
    line-height: 1.5;
    font-weight: 600;
    letter-spacing: 0.025em;
    


`;
const Line = styled.p`
  color: black;
    font-size: 20px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1px;

`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: black;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transprent;
    border-radius: 4px;
    &:hover {
      color: black;
        background-color: white;
        cursor: pointer;
        border: 1px solid black;
    }
`;
const SignUp_1 = styled.a`
    font-weight: bold;
    color: black;
    border: 0.25px solid black;
    background-color: #f9f9f9;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transprent;
    border-radius: 4px;
    &:hover {
      color: white;
        background-color: black;
        cursor: pointer;
    }
`;

// #0063e5 #0483ee
//    color: hsla(0, 0%, 95.3%, 1);