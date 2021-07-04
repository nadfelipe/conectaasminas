import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

const LinkStyle = styled.a`
  background-image: linear-gradient(114.14deg, #740F99 45.88%, #15B4C2 251.47%);
  padding: 0.7em 1.5em;
  border-radius: 5px;
  width: 12rem;
  text-align: center;
  color: #f4f4f4;
  font-weight: 800;
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