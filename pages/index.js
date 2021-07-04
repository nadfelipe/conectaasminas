import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from '../src/components/Link'
import styled from 'styled-components';

import Logo from '../src/assets/logo-branco.svg'


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

const LandingContent = styled.div`
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

const LandingTextos = styled.div`
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

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Conecta as Minas</title>
      </Head>

      <Landing imgUrl='https://cdn.discordapp.com/attachments/315943804567945216/861093391790243860/desenho-01.png'>
        <Image src={Logo} alt='Logo do Conecta as Minas' width={157} height={50}/>

        <LandingContent>
          <LandingTextos>
            <h1>Projeto de conclusão do Curso Técnico de Multimídia da Escola SENAI de Informática no primeiro semestre de 2021</h1>
            <p>Conheça nosso projeto completo no Behance</p>
          </LandingTextos>
          <Link href={"https://google.com"} target="_blank">Ir para o projeto</Link>
        </LandingContent>
      </Landing>

      <section>
        <div>
          <h2>Quer saber mais?</h2>
          <div>
            <Link href={"https://google.com"} target="_blank">Acesse o protótipo</Link>
            <Link href={"https://google.com"} target="_blank">Acesse o projeto</Link>
          </div>
        </div>
        <p>O conecta as minas é uma plataforma de orientação vocacional, que auxilia meninas a desenvolver confiança e autoconhecimento – através de testes e desafios – com o intuito de recuperar o interesse na tecnologia, que foi perdido durante os anos.</p>
      </section>



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
