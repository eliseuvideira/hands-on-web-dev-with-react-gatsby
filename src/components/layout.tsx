import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ title: string; subtitle: string }>;

const Layout: React.FC<Props> = ({ title, subtitle, children }) => {
  return (
    <div className="app-container">
      <header>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, Rachelle Rathbone</footer>
    </div>
  );
};

export default Layout;
