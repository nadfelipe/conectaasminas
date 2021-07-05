import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

const LinkStyle = styled.a`
  background-image: linear-gradient(${(props)=>props.grd});
  padding: 0.7em 1.5em;
  border-radius: 5px;
  width: 12rem;
  text-align: center;
  color: #f4f4f4;
  font-weight: 800;
  font-size: 1rem;
  @media(max-width: 500px){
    width: 7.3rem;
    font-size: 0.7rem;
    padding: 0.5rem 0.4rem;
  }
`;


export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <LinkStyle {...props}>
        {children}
      </LinkStyle>
    </NextLink>
  );
}