import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from '../src/components/Link'
import NextLink from 'next/link';
import { IconContext } from "react-icons";
import styled from 'styled-components';

import Logo from '../src/assets/logo-branco.svg'
import Maos from '../src/assets/maos.svg'
import DanielPic from '../src/assets/daniel-foto.png'
import GiovannaPic from '../src/assets/giovanna-foto.png'
import LuannaPic from '../src/assets/luanna-foto.png'
import JuliaPic from '../src/assets/julia-foto.png'
import JulyaPic from '../src/assets/julya-foto.png'
import RodrigoPic from '../src/assets/rodrigo-foto.png'
import {FaBehance, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";


const Landing = styled.section`
  width: 100vw;
  padding: 2rem;
  height: 100vh;
  background-color: #15B4C2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url(${(props)=>props.imgUrl});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: 10% 100%;

  @media(min-width: 500px){
    background-size: 60%;
  }
  @media(min-width: 1336px){
    background-size: 25%;
  }
`;

Landing.Content = styled.div`
  width: 100%;
  align-self: center !important;
  display: flex;
  flex-direction: column;
  height: 65%;
  align-items: center;
  text-align: center;

  @media(min-width: 500px){
    height: 80%;
  }
  @media(min-width: 1336px){
    width: 55%;
    height: 70%;
  }
`;

Landing.Textos = styled.div`
  font-family: 'Nunito', sans-serif;
  color: #FCFCFC;

  h1{
    display: none;

    @media (min-width: 500px){
      display: block;
      font-size: 1.4rem;
      font-weight: 800;
    }
    @media(min-width: 1336px){
      display: block;
      font-size: 1.4rem;
      font-weight: 800;
  }}
  p {
    margin-top: -1em;
    font-size: 1.4rem;
    font-weight: 600;

    @media(min-width: 500px){
      font-size: 1rem;
      font-weight: 500;
    }
    @media(min-width: 1336px){
      font-size: 1rem;
      font-weight: 500;
  }}
`;

const Section2 = styled.section`
  padding: 1rem 2em;
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #FCFCFC;
  p{
    margin-top: 4em;
    width: 60%;
    text-align: center;
    color: #15B4C2;
    font-size: 1.2rem;
  }
  @media(max-width: 500px){
    p{
      margin-top: 1rem;
      font-size: 0.9rem;
      width: 100%;
    }
  }
`;

Section2.Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h2{
    color: #740F99;
    font-weight: 700;
  }
  @media(max-width: 500px){
    div{
      display: flex;
      justify-content: space-around;
      width: 100%;
    }
  }
`;

Section2.Links = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  @media(max-width: 500px){
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    margin-top: 1em;
    a{
      margin: 1em 0 0 0;
    }
  }
`;

const Section3 = styled.section`
  padding: 2rem;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #FCFCFC;

  h2{
    color: #15B4C2;
    font-weight: 700;
    font-style: italic;
    font-size: 1.5rem;
  }
  @media(max-width: 500px){
    h2{
      font-size: 1.3rem;
      text-align: center;
    }  
    @media(max-width: 414px){
      background: url("https://cdn.discordapp.com/attachments/315943804567945216/866854063545778176/Group_192.png");
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center right 70%;

    }
  }
`;

const Cards = styled.div`
  max-width: 60%;
  height: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 232px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.5em 2em 0.5em;
`;

const CardImg = styled.div`
  margin-bottom: -10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
    border-radius: 5px;
    z-index: 15;
    width: 60px;
    height: 60px;
    position: absolute;
  }
  div{
    width: 67px;
    height: 67px;
    border-radius: 5px;
    border: 5px solid #FCFCFC;
    z-index: 10;
    background: #FCFCFC;
  }
`;

Card.Content = styled.div`
  z-index: 1;
  background-color: ${(props)=>props.clr};
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  p{
    margin: 10px 0 -10px 0;
    font-family: 'Epilogue', sans-serif;
    color: #FCFCFC;
    font-size: 1.3rem;
  }
  @media(max-width: 500px){
    p{
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
`;

const Icons = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`;

const Section4 = styled.div`
  background-color: #FCFCFC;
  padding: 2rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 30%;
  }
  @media(max-width: 500px){
    img{
      width: 100%;
    }
  }
`;


const Footer = styled.footer`
  font-family: 'Epilogue', sans-serif;
  background-color: #f4f4f4;
  height: 50px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  color: #15B4C2;
  font-weight: 700;
`;

export default function Home() {
  return (
  <div>
    <div className={styles.container}>
      <Head>
        <title>Conecta as Minas</title>
      </Head>

      <Landing imgUrl='https://cdn.discordapp.com/attachments/315943804567945216/861093391790243860/desenho-01.png'>
        <Image src={Logo} alt='Logo do Conecta as Minas' width={157} height={50}/>
        <Landing.Content>
          <Landing.Textos>
            <h1>Projeto de conclusão do Curso Técnico de Multimídia da Escola SENAI de Informática no primeiro semestre de 2021</h1>
            <p>Conheça nosso projeto completo no Behance</p>
          </Landing.Textos>
          <Link href={"https://www.behance.net/gallery/122827485/Conecta-as-Minas"} target="_blank" grd='
  114.14deg, #740F99 45.88%, #15B4C2 251.47%'>Ir para o projeto</Link>
        </Landing.Content>
      </Landing>

      <Section2>
        <Section2.Content>
          <h2>Quer saber mais?</h2>
          <Section2.Links>
            <Link href={"https://www.figma.com/proto/TjcLxIrHJNePcD2m3diK0q/Grupo-2-ODS5?page-id=244%3A17&node-id=532%3A8321&viewport=220%2C278%2C0.20651789009571075&scaling=scale-down"} target="_blank" grd='260.64deg, #CC0A9C -29.89%, #740F99 126.84%'>Acesse o protótipo</Link>
            <Link href={"https://youtu.be/TdC6irj6Sm0"} target="_blank" grd='278.73deg, #FAB319 -43.97%, #CC0A9C 113.91%'>Acesse o vídeo</Link>
            <Link href={"https://www.behance.net/gallery/122827485/Conecta-as-Minas"} target="_blank" grd='278.73deg, #FAB319 -43.97%, #CC0A9C 113.91%'>Acesse o projeto</Link>
          </Section2.Links>
        </Section2.Content>
        <p>O conecta as minas é uma plataforma de orientação vocacional, que auxilia meninas a desenvolver confiança e autoconhecimento – através de testes e desafios – com o intuito de recuperar o interesse na tecnologia, que foi perdido durante os anos.</p>
      </Section2>

      <Section3>
        <h2>"Quem idealizou esse projeto?"</h2>
        <Cards>
          <Card>
            <CardImg>
              <img src={DanielPic} />
              <div></div>
            </CardImg>
            <Card.Content clr='#740F99'>
              <p>Daniel Felipe</p>
              <IconContext.Provider value={{color: '#FCFCFC', size: '1.2rem'}}>
                <Icons>
                  <NextLink href="https://www.behance.net/danelfelip" passHref>
                    <a target="_blank">
                      <FaBehance/>
                    </a>
                  </NextLink>
                  <NextLink href="https://www.linkedin.com/in/nadfelipe/" passHref>
                    <a target="_blank">
                    <FaLinkedinIn/>
                    </a>
                  </NextLink>
                  <NextLink href="https://www.instagram.com/danelfp/" passHref>
                    <a target="_blank">
                    <FaInstagram/>
                    </a>
                  </NextLink>
                  <NextLink href="mailto:nadfelipe.s@gmail.com" passHref>
                    <FaEnvelope/>
                  </NextLink>
                </Icons>
              </IconContext.Provider>
            </Card.Content>
          </Card>
          <Card>
            <CardImg>
              <img src={GiovannaPic} />
              <div></div>
            </CardImg>
            <Card.Content clr='#FAB319'>
              <p>Giovanna Maria</p>
              <IconContext.Provider value={{color: '#FCFCFC', size: '1.2rem'}}>
                <Icons>
                  <NextLink href="https://www.behance.net/giovannamaria6" passHref>
                    <a target="_blank">
                      <FaBehance/>
                    </a>
                  </NextLink>
                  <NextLink href="https://www.linkedin.com/in/giovanna-maria-490b091a2/" passHref>
                    <a target="_blank">
                    <FaLinkedinIn/>
                    </a>
                  </NextLink>
                  <NextLink href="https://www.instagram.com/gimariaz/" passHref>
                    <a target="_blank">
                    <FaInstagram/>
                    </a>
                  </NextLink>
                  <NextLink href="mailto:gibazinha1312@gmail.com" passHref>
                    <FaEnvelope/>
                  </NextLink>
                </Icons>
              </IconContext.Provider>
            </Card.Content>
          </Card>  
          <Card>
            <CardImg>
              <img src={LuannaPic} />
              <div></div>
            </CardImg>
            <Card.Content clr='#CC0A9C'>
              <p>Luanna Helena</p>
              <IconContext.Provider value={{color: '#FCFCFC', size: '1.2rem'}}>
                <Icons>
                  <NextLink href="https://www.behance.net/luannahelena" passHref>
                    <a target="_blank">
                      <FaBehance/>
                    </a>
                  </NextLink>
                  <NextLink href="https://www.linkedin.com/in/luanna-helena-silva-izidoro-8b1b0a1a2/" passHref>
                    <a target="_blank">
                    <FaLinkedinIn/>
                    </a>
                  </NextLink>
                  <NextLink href="https://www.instagram.com/_luannahelena/" passHref>
                    <a target="_blank">
                    <FaInstagram/>
                    </a>
                  </NextLink>
                  <NextLink href="mailto:helennaluanna@gmail.com" passHref>
                    <FaEnvelope/>
                  </NextLink>
                </Icons>
              </IconContext.Provider>
            </Card.Content>
          </Card>  
          <Card>
            <CardImg>
              <img src={JuliaPic} />
              <div></div>
            </CardImg>
            <Card.Content clr='#740F99'>
              <p>Julia Fontoura</p>
              <IconContext.Provider value={{color: '#FCFCFC', size: '1.2rem'}}>
                <Icons>
                  <NextLink href="https://www.behance.net/juliafontoura" passHref>
                    <a target="_blank">
                      <FaBehance/>
                    </a>
                  </NextLink>
                  <NextLink href="https://www.linkedin.com/in/julia-fontoura-14603a190/" passHref>
                    <a target="_blank">
                    <FaLinkedinIn/>
                    </a>
                  </NextLink>
                  <NextLink href="https://www.instagram.com/juliaafontoura/" passHref>
                    <a target="_blank">
                    <FaInstagram/>
                    </a>
                  </NextLink>
                  <NextLink href="mailto:juliafontoura55@gmail.com" passHref>
                    <FaEnvelope/>
                  </NextLink>
                </Icons>
              </IconContext.Provider>
            </Card.Content>
          </Card>  
          <Card>
            <CardImg>
              <img src={JulyaPic} />
              <div></div>
            </CardImg>
            <Card.Content clr='#FAB319'>
              <p>Julya Neves</p>
              <IconContext.Provider value={{color: '#FCFCFC', size: '1.2rem'}}>
                <Icons>
                  <NextLink href="https://www.behance.net/julyaneves" passHref>
                    <a target="_blank">
                      <FaBehance/>
                    </a>
                  </NextLink>
                  <NextLink href="https://www.linkedin.com/in/julya-neves-121b0a1a2/" passHref>
                    <a target="_blank">
                    <FaLinkedinIn/>
                    </a>
                  </NextLink>
                  <NextLink href="https://www.instagram.com/juuhon_/" passHref>
                    <a target="_blank">
                    <FaInstagram/>
                    </a>
                  </NextLink>
                  <NextLink href="mailto:julya.on54@gmail.com" passHref>
                    <FaEnvelope/>
                  </NextLink>
                </Icons>
              </IconContext.Provider>
            </Card.Content>
          </Card>  
          <Card>
            <CardImg>
              <img src={RodrigoPic} />
              <div></div>
            </CardImg>
            <Card.Content clr='#CC0A9C'>
              <p>Rodrigo Melhado</p>
              <IconContext.Provider value={{color: '#FCFCFC', size: '1.2rem'}}>
                <Icons>
                  <NextLink href="https://www.behance.net/rod_melhado" passHref>
                    <a target="_blank">
                      <FaBehance/>
                    </a>
                  </NextLink>
                  <NextLink href="https://www.linkedin.com/in/rodrigo-melhado/" passHref>
                    <a target="_blank">
                    <FaLinkedinIn/>
                    </a>
                  </NextLink>
                  <NextLink href="https://www.instagram.com/rod_melhado/" passHref>
                    <a target="_blank">
                    <FaInstagram/>
                    </a>
                  </NextLink>
                  <NextLink href="mailto:rodrigocmon@gmail.com" passHref>
                    <FaEnvelope/>
                  </NextLink>
                </Icons>
              </IconContext.Provider>
            </Card.Content>
          </Card>  
        </Cards>
      </Section3>

      <Section4>
        <img src={Maos}/>
      </Section4>

    </div>
    <Footer>© 2021 conecta as minas</Footer>
  </div>
  )
}
