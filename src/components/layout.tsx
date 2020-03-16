import React, { ReactNode, FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './layout.scss';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC = ({ children }: LayoutProps): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return <main>{children}</main>;
};

export default Layout;
