import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 2em 2em 1em 2em;

  @media (max-width: 991px) {
    padding: 2em 5em;
  }

  @media (max-width: 414px) {
    padding: 2em 3em;
  }
`;

type Props = PropsWithChildren<{ title: string; subtitle: string }>;

const Layout: React.FC<Props> = ({ title, subtitle, children }) => {
  return (
    <AppContainer>
      <header>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, Rachelle Rathbone</footer>
    </AppContainer>
  );
};

export default Layout;
