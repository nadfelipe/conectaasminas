import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from '../src/components/Link'
import NextLink from 'next/link';
import { IconContext } from "react-icons";
import styled from 'styled-components';

import Logo from '../src/assets/logo-branco.svg'
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
  color: #f4f4f4;

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
  padding: 2rem;
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #f4f4f4;
  p{
    width: 60%;
    text-align: center;
    color: #15B4C2;
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

  div{
    display: flex;
    justify-content: space-around;
    width: 40%;
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
  background-color: #f4f4f4;

  h2{
    color: #15B4C2;
    font-weight: 700;
    font-style: italic;
  }
`;

const Cards = styled.div`
  width: 60%;
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
    border: 5px solid #f4f4f4;
    z-index: 10;
    background: #f4f4f4;
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
    color: #f4f4f4;
    font-size: 1.3rem;
  }
`;

const Icons = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`;

export default function Home() {
  return (
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
          <Link href={"https://google.com"} target="_blank" grd='
  114.14deg, #740F99 45.88%, #15B4C2 251.47%'>Ir para o projeto</Link>
        </Landing.Content>
      </Landing>

      <Section2>
        <Section2.Content>
          <h2>Quer saber mais?</h2>
          <div>
            <Link href={"https://google.com"} target="_blank" grd='260.64deg, #CC0A9C -29.89%, #740F99 126.84%'>Acesse o protótipo</Link>
            <Link href={"https://google.com"} target="_blank" grd='278.73deg, #FAB319 -43.97%, #CC0A9C 113.91%'>Acesse o projeto</Link>
          </div>
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
              <IconContext.Provider value={{color: '#f4f4f4', size: '1.5rem'}}>
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
              <IconContext.Provider value={{color: '#f4f4f4', size: '1.5rem'}}>
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
              <IconContext.Provider value={{color: '#f4f4f4', size: '1.5rem'}}>
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
              <IconContext.Provider value={{color: '#f4f4f4', size: '1.5rem'}}>
                <Icons>
                  <NextLink href="https://www.behance.net/juliafontoura" passHref>
                    <a target="_blank">
                      <FaBehance/>
                    </a>
                  </NextLink>
                  <NextLink href="https://www.linkedin.com/in/julia-fontoura/" passHref>
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
              <IconContext.Provider value={{color: '#f4f4f4', size: '1.5rem'}}>
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
              <IconContext.Provider value={{color: '#f4f4f4', size: '1.5rem'}}>
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



      {/* <section class="s1">

        <div class="delimitador">
            <div class="logo">
                <img src="img/logo-branco.svg" width="156.54" height="50" />
            </div>
            <div class="delimitador-500 conheca">
                <h1 class="text-white text-center">Conheça nosso projeto <br/> completo no Behance</h1>
                <p class="text-white text-center">Projeto de conclusão do Curso Técnico de Multimídia da Escola SENAI de
                    Informática no primeiro semestre de 2021</p>
                <div class="buttom-geral b1 extrabold text-white m-auto">
                    <p>Ir para o Projeto</p>
                </div>
            </div>
        </div>
        <img class="menina1" src="img/primeira-guria.svg" alt=""/>
    </section>

    <section class="s2">
        <div class="delimitador">
            <div class="delimitador-500">
                <p class="azul-verde text-center pt-5">O conecta as minas é uma plataforma de orientação vocacional, que
                    auxilia meninas
                    a
                    desenvolver confiança e autoconhecimento – através de testes e desafios – com o intuito de recuperar
                    o
                    interesse na tecnologia, que foi perdido durante os anos.</p>
                <h1 class="roxo text-center pt-4 pb-3">Quer saber mais? </h1>
                <div class="row delimitador-350">
                    <div class="buttom-geral b2 col-xs-6 col-md-6 col-lg-6 extrabold text-white m-auto">
                        <p>Acesse o protótipo</p>
                    </div>
                    <div class="buttom-geral b3 col-xs-6 col-md-6 col-lg-6 extrabold text-white m-auto">
                        <p>Acesse o projeto</p>
                    </div>
                </div>

                <h2 class="citacao azul-verde bold italic pt-5 text-right">“Quem idealizou <br/>esse projeto?”</h2>
            </div>

            <div class="delimitador">
                <div class="row quem">
                    <div class="col-xs-12 col-md-6 col-lg-4 mt-4 mb-4">
                        <div class="m-auto perfil "><img src="img/daniel.webp" alt="" class="foto-perfil"/></div>
                        <div class="m-auto caixa-integrantes bg-roxo">
                            <p class="nome text-white pt-3">Daniel Felipe</p>
                            <p class="redes text-white"><i class="fab fa-behance"></i><i
                                    class="fab fa-linkedin-in"></i><i class="fab fa-instagram"></i><i
                                    class="far fa-envelope"></i></p>
                        </div>
                    </div>

                    <div class="col-xs-12 col-md-6 col-lg-4 mt-4 mb-4">
                        <div class="m-auto perfil "><img src="img/giovanna.webp" alt="" class="foto-perfil"/></div>
                        <div class="m-auto caixa-integrantes bg-amarelo">
                            <p class="nome text-white  pt-3">Giovanna Mariana</p>
                            <p class="redes text-white"><i class="fab fa-behance"></i><i
                                    class="fab fa-linkedin-in"></i><i class="fab fa-instagram"></i><i
                                    class="far fa-envelope"></i></p>
                        </div>
                    </div>

                    <div class="col-xs-12 col-md-6 col-lg-4 mt-4 mb-4">
                            <div class="m-auto perfil "><img src="img/luanna.webp" alt="" class="foto-perfil"/></div>
                            <div class="m-auto caixa-integrantes bg-rosa">
                                <p class="nome text-white pt-3">Luanna Helena</p>
                                <p class="redes text-white"><i class="fab fa-behance"></i><i
                                        class="fab fa-linkedin-in"></i><i class="fab fa-instagram"></i><i
                                        class="far fa-envelope"></i></p>
                            </div>
                    </div>

                    <div class="col-xs-12 col-md-6 col-lg-4 mt-4 mb-4">
                        <div class="m-auto perfil "><img src="img/julia.webp" alt="" class="foto-perfil"/></div>
                        <div class="m-auto caixa-integrantes bg-roxo">
                            <p class="nome text-white pt-3">Julia Fontoura</p>
                            <p class="redes text-white"><i class="fab fa-behance"></i><i
                                    class="fab fa-linkedin-in"></i><i class="fab fa-instagram"></i><i
                                    class="far fa-envelope"></i></p>
                        </div>
                    </div>

                    <div class="col-xs-12 col-md-6 col-lg-4 mt-4 mb-4">
                        <div class="m-auto perfil "><img src="img/julya.webp" alt="" class="foto-perfil"/></div>
                        <div class="m-auto caixa-integrantes bg-amarelo">
                            <p class="nome text-white  pt-3">Julya Neves</p>
                            <p class="redes text-white"><i class="fab fa-behance"></i><i
                                    class="fab fa-linkedin-in"></i><i class="fab fa-instagram"></i><i
                                    class="far fa-envelope"></i></p>
                        </div>
                    </div>

                    <div class="col-xs-12 col-md-6 col-lg-4 mt-4 mb-4">
                            <div class="m-auto perfil "><img src="img/rodrigo.jfif" alt="" class="foto-perfil"/></div>
                            <div class="m-auto caixa-integrantes bg-rosa">
                                <p class="nome text-white pt-3">Rodrigo Melhado</p>
                                <p class="redes text-white"><i class="fab fa-behance"></i><i
                                        class="fab fa-linkedin-in"></i><i class="fab fa-instagram"></i><i
                                        class="far fa-envelope"></i></p>
                            </div>
                    </div>

                    <div class="text-center col-xs-12 col-md-12 col-lg-12 mt-10 mb-10">

                        <img class="text-center" src="img/maos.svg" alt=""/>
                    </div>
                </div>

                

            </div>
        </div>
    </section>

    <footer>
        <p class="azul-verde text-center rodape extrabold">© 2021 conecta as minas</p>
    </footer> */}

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
